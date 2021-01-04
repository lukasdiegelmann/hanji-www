import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../@intrinsic/store";
import useStyles from "../../../../@utils/useStyles";
import playerSlice from "../../../scaffolding/player/Player.slice";
import scss from "./Video.module.scss";

type Props = ConnectedProps<typeof connector>;

const Video: React.FunctionComponent<Props> = (props) => {
    const styles = useStyles({
        video: {
            height: `${props.own.options?.reactPlayer?.height ?? 100}px`,
            backgroundColor: props.own.options?.backdropped
                ? "#141414"
                : "inherit",
        },
    });

    const reactPlayerRef = useRef<any>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [videoData, setVideoData] = useState(props.own.URI);

    const handleClick = () => {
        if (props.own.options?.fullscreen && typeof videoData === "string") {
            props.dispatch.createInstance();
            props.dispatch.setInstanceURI(videoData);

            if (reactPlayerRef.current) {
                props.dispatch.setInstanceProgress(
                    reactPlayerRef.current.getCurrentTime()
                );
            }

            props.dispatch.toggleInstance();
        }
    };

    const handleVideoData = useCallback(async () => {
        if (props.own.URI instanceof Promise) {
            const videoData = await props.own.URI;
            const videoDataStatic: string = videoData.default;

            setVideoData(videoDataStatic);
        }
    }, [props.own.URI]);

    useEffect(() => {
        if (props.state.instance && !props.state.instance?.DATA.closed) {
            setIsPlaying(false);
        }
        if (props.state.instance && props.state.instance?.DATA.closed) {
            setIsPlaying(true);
            reactPlayerRef.current.seekTo(
                props.state.instance.DATA.currentTime
            );
        }
    }, [props.state.instance]);

    useEffect(() => {
        handleVideoData();
    }, [handleVideoData]);

    return (
        <div
            className={scss["video-container"]}
            style={styles.get().video}
            onClick={handleClick}
        >
            <div className={scss["video-container__background"]} />
            <div className={scss["video-container__foreground"]}>
                <ReactPlayer
                    ref={reactPlayerRef}
                    url={typeof videoData === "string" ? videoData : ""}
                    playing={isPlaying}
                    {...props.own.options?.reactPlayer}
                />
            </div>
        </div>
    );
};

type OwnProps = {
    URI: string | Promise<any>;
    ID: string | number;
    options?: Partial<{
        fullscreen: boolean;
        backdropped: boolean;
        reactPlayer: ReactPlayerProps;
    }>;
};

const connector = connect(
    (state: RootState, ownProps: OwnProps) => ({
        state: {
            instance: state.player.instances[ownProps.ID],
        },
        own: ownProps,
    }),
    (dispatch, ownProps: OwnProps) => ({
        dispatch: {
            createInstance: () => {
                dispatch(playerSlice.actions.createInstance(ownProps.ID));
            },
            toggleInstance: () => {
                dispatch(playerSlice.actions.toggleInstance(ownProps.ID));
            },
            setInstanceURI: (URI: string) => {
                dispatch(
                    playerSlice.actions.setInstanceURI({ ID: ownProps.ID, URI })
                );
            },
            setInstanceProgress: (progress: any) => {
                dispatch(
                    playerSlice.actions.setInstanceProgress({
                        ID: ownProps.ID,
                        progress,
                    })
                );
            },
        },
    })
);

export default connector(Video);
