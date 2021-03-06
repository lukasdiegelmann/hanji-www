/**
 * @author lukasdiegelmann
 */

import React, { useCallback, useEffect, useRef } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import useStyles from "../../../../@utils/useStyles";
import useRelativeToComponent from "../../../../@utils/useRelativeToComponent";
import scss from "./HoverButton.module.scss";

type Props = {
    text: string;
    title: string;
    appearance?: Partial<{
        crosshaired: boolean;
        underlined: boolean;
        letterspacing: boolean;
        inverted: boolean;
    }>;
    to?: string;
} & RouteComponentProps;

const HoverButton: React.FunctionComponent<Props> = (props) => {
    const hoverButtonRef = useRef<HTMLDivElement>(null);

    const styles = useStyles({
        hoverButton: {
            cursor: props.appearance?.crosshaired ? "crosshair" : "default",
            backgroundColor: props.appearance?.inverted ? "white" : "#141414",
        },
        hoverButtonText: {
            fontSize: "0px",
            textDecoration: `${
                props.appearance?.underlined ? "underline" : "none"
            }`,
            letterSpacing: "0px",
            marginRight: "0px",
            color: props.appearance?.inverted ? "#141414" : "white",
        },
        hoverButtonTitle: {
            filter: "opacity(0%)",
            fontSize: "0px",
        },
        hoverButtonClickLeft: {
            transform: "translate3d(calc(-100% - 1px), 0, 0)",
        },
        hoverButtonClickRight: {
            transform: "translate3d(calc(100% + 1px), 0, 0)",
        },
    });

    const handleClick = useCallback(() => {
        styles.set(
            [
                {
                    __id: "0:0",
                    __tOffset: 0,
                    hoverButtonClickLeft: {
                        transform: "translate3d(-49%, 0, 0)" as any,
                    },
                    hoverButtonClickRight: {
                        transform: "translate3d(49%, 0, 0)" as any,
                    },
                },
                {
                    __id: "0:1",
                    __tOffset: 700,
                    hoverButtonTitle: {
                        filter: "opacity(100%)" as any,
                    },
                },
                {
                    __id: "0:2",
                    __tOffset: 600,
                    __middleware: () => {
                        if (props.to) {
                            props.history.push(props.to);
                        }
                    },
                    hoverButtonTitle: {
                        filter: "opacity(0%)",
                    },
                },
                {
                    __id: "0:3",
                    __tOffset: 400,
                    hoverButtonClickLeft: {
                        transform: "translate3d(calc(-100% - 1px), 0, 0)",
                    },
                    hoverButtonClickRight: {
                        transform: "translate3d(calc(100% + 1px), 0, 0)",
                    },
                },
            ],
            { isSafe: true }
        );
    }, [styles, props.history, props.to]);

    useRelativeToComponent([
        {
            ref: hoverButtonRef,
            orientation: {
                width: 1920,
                height: 1080,
            },
            options: {
                scalar: 80,
            },
            handle: (result) => {
                styles.set({
                    hoverButtonText: {
                        fontSize: `${result}px` as any,
                        letterSpacing: props.appearance?.letterspacing
                            ? `${result * 0.7}px`
                            : ("0px" as any),
                        marginRight: `-${result * 0.7}px` as any,
                    },
                });
            },
        },
        {
            ref: hoverButtonRef,
            orientation: {
                width: 1920,
                height: 1080,
            },
            options: {
                scalar: 140,
            },
            handle: (result) => {
                styles.set({
                    hoverButtonTitle: {
                        fontSize: `${result}px` as any,
                    },
                });
            },
        },
    ]);

    useEffect(() => {
        return () => {
            styles.clear("0");
        };
    }, []);

    return (
        <div
            ref={hoverButtonRef}
            className={scss["hover-button"]}
            style={styles.get().hoverButton}
            onClick={handleClick}
        >
            <div className={scss["hover-button__text-container"]}>
                <b
                    className={scss["hover-button__text"]}
                    style={styles.get().hoverButtonText}
                >
                    {props.text}
                </b>
            </div>
            <div className={scss["hover-button__title-container"]}>
                <b
                    className={scss["hover-button__title"]}
                    style={styles.get().hoverButtonTitle}
                >
                    {props.title}
                </b>
            </div>
            <div className={scss["hover-button__click-container"]}>
                <div
                    className={scss["hover-button__click__door"]}
                    style={styles.get().hoverButtonClickLeft}
                />
                <div
                    className={scss["hover-button__click__door"]}
                    style={styles.get().hoverButtonClickRight}
                />
            </div>
        </div>
    );
};

export default withRouter(HoverButton);
