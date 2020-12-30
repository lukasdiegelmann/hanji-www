/**
 * @author lukasdiegelmann
 */

import React, { useCallback } from "react";
import useStyles from "../../../../@utils/useStyles";
import useRelativeToWindowSize from "../../../../@utils/useRelativeToWindowSize";
import scss from "./HoverButton.module.scss";

type Props = {
    text: string;
    title: string;
    appearance?: Partial<{
        crosshaired: boolean;
        underlined: boolean;
    }>;
};

const HoverButton: React.FunctionComponent<Props> = (props) => {
    const styles = useStyles({
        hoverButton: {
            borderWidth: "0px",
            cursor: props.appearance?.crosshaired ? "crosshair" : "default",
        },
        hoverButtonText: {
            fontSize: "0px",
            textDecoration: `${
                props.appearance?.underlined ? "underline" : "none"
            }`,
        },
        hoverButtonTitle: {
            filter: "opacity(0%)",
            fontSize: "0px",
        },
        hoverButtonClickLeft: {
            transform: "translate3d(-100%, 0, 0)",
        },
        hoverButtonClickRight: {
            transform: "translate3d(100%, 0, 0)",
        },
    });

    const handleClick = useCallback(() => {
        styles.set([
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
                hoverButtonTitle: {
                    filter: "opacity(0%)",
                },
            },
            {
                __id: "0:3",
                __tOffset: 400,
                hoverButtonClickLeft: {
                    transform: "translate3d(-100%, 0, 0)",
                },
                hoverButtonClickRight: {
                    transform: "translate3d(100%, 0, 0)",
                },
            },
        ]);
    }, [styles]);

    useRelativeToWindowSize([
        {
            options: {
                width: 1920,
                height: 1080,
                scalar: 20,
            },
            handle: (scalar) => {
                styles.set({
                    hoverButtonText: {
                        fontSize: `${scalar}px` as any,
                    },
                });
            },
        },
        {
            options: {
                width: 1920,
                height: 1080,
                scalar: 30,
            },
            handle: (scalar) => {
                styles.set({
                    hoverButtonTitle: {
                        fontSize: `${scalar}px` as any,
                    },
                });
            },
        },
    ]);

    return (
        <div
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

export default HoverButton;
