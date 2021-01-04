import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../@intrinsic/store";
import useStyles from "../../../@utils/useStyles";
import playerSlice, { InitialState } from "./Player.slice";
import scss from "./Player.module.scss";

type Props = ConnectedProps<typeof connector>;

type CurrentInstance = InitialState["instances"][keyof InitialState["instances"]] & {
    ID: string | number;
};

const Player: React.FunctionComponent<Props> = (props) => {
    const reactPlayerRef = useRef<any>(null);

    const [currentInstance, setCurrentInstance] = useState<CurrentInstance>();
    const [isPlaying, setIsPlaying] = useState(true);

    const styles = useStyles({
        player: {
            display: "none",
            transform: "translate3d(0, -100%, 0)",
        },
    });

    const handleClick = () => {
        styles.set([
            {
                __id: "1:0",
                __tOffset: 0,
                player: {
                    transform: "translate3d(0, -100%, 0)" as any,
                },
            },
            {
                __id: "1:1",
                __tOffset: 500,
                __middleware: () => {
                    if (currentInstance) {
                        props.dispatch.toggleInstance(currentInstance.ID);
                        props.dispatch.setInstanceProgress(
                            currentInstance.ID,
                            reactPlayerRef.current.getCurrentTime()
                        );
                        setIsPlaying(false);
                    }
                },
                player: {
                    display: "none",
                },
            },
        ]);
    };

    const getCurrentInstance = useCallback(() => {
        for (const ID in props.state.instances) {
            const instance: CurrentInstance = {
                ...props.state.instances[ID],
                ID,
            };

            if (!instance.DATA.closed) {
                return instance;
            }
        }
    }, [props.state.instances]);

    useEffect(() => {
        const instance = getCurrentInstance();

        if (instance) {
            setCurrentInstance(instance);
        }
    }, [getCurrentInstance]);

    useEffect(() => {
        if (currentInstance) {
            styles.set([
                {
                    __id: "0:0",
                    __tOffset: 0,
                    __middleware: () => {
                        if (reactPlayerRef.current) {
                            reactPlayerRef.current.seekTo(
                                currentInstance.DATA.currentTime
                            );
                            setIsPlaying(true);
                        }
                    },
                    player: {
                        display: "grid" as any,
                    },
                },
                {
                    __id: "0:1",
                    __tOffset: 100,
                    player: {
                        transform: "translate3d(0, 0, 0)" as any,
                    },
                },
            ]);
        }
    }, [currentInstance]);

    return (
        <div
            className={scss["player"]}
            style={styles.get().player}
            onClick={handleClick}
        >
            <div className={scss["player__background"]} />
            <div className={scss["player__foreground"]}>
                <ReactPlayer
                    ref={(player) => (reactPlayerRef.current = player)}
                    className={scss["player__video"]}
                    playing={isPlaying}
                    muted={true}
                    url={currentInstance?.URI ?? ""}
                />
            </div>
        </div>
    );
};

const connector = connect(
    (state: RootState) => ({
        state: {
            instances: state.player.instances,
        },
    }),
    (dispatch) => ({
        dispatch: {
            toggleInstance: (ID: string | number) => {
                dispatch(playerSlice.actions.toggleInstance(ID));
            },
            setInstanceProgress: (ID: string | number, progress: any) => {
                dispatch(
                    playerSlice.actions.setInstanceProgress({ ID, progress })
                );
            },
        },
    })
);

export default connector(Player);
