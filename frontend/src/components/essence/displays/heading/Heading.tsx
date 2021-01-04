import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CSS from "csstype";
import LinkMask from "../../wrappers/link-mask/LinkMask";
import useStyles from "../../../../@utils/useStyles";
import useRelativeToComponent from "../../../../@utils/useRelativeToComponent";
import scss from "./Heading.module.scss";

type Props = {
    class: number;
    children: string;
    options?: Partial<{
        attachable: boolean;
        keepSize: boolean;
        backdropped: boolean;
        subtitle: string;
        style: CSS.Properties;
    }>;
};

const Heading: React.FunctionComponent<Props> = (props) => {
    const headingRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const linkTo = `${location.pathname}#${props.children}`;

    const styles = useStyles({
        heading: {
            height: `${400 / 2 ** props.class}px`,
        },
        headingBackground: {
            filter: "opacity(0%)",
        },
        headingText: {
            fontSize: `${200 / 2 ** props.class}px`,
            color: props.options?.backdropped ? "white" : "inherit",
            backgroundColor: props.options?.backdropped ? "#141414" : "inherit",
            borderRadius: props.options?.backdropped ? "1.5%" : "0%",
            ...props.options?.style,
        },
    });

    useRelativeToComponent([
        {
            ref: headingRef,
            orientation: {
                width: 1920,
                height: 1080,
            },
            options: {
                scalar: 1.4,
            },
            handle: (result) => {
                if (!props.options?.keepSize) {
                    styles.set({
                        heading: {
                            height: `${(400 * result) / 2 ** props.class}px`,
                        },
                        headingText: {
                            fontSize: `${(200 * result) / 2 ** props.class}px`,
                        },
                    });
                }
            },
        },
    ]);

    useEffect(() => {
        if (`#${props.children}` === `${decodeURIComponent(location.hash)}`) {
            headingRef.current?.scrollIntoView();
            styles.set([
                {
                    __id: "0:0",
                    __tOffset: 0,
                    headingBackground: {
                        filter: "opacity(80%)" as any,
                    },
                },
                {
                    __id: "0:1",
                    __tOffset: 1000,
                    headingBackground: {
                        filter: "opacity(0%)",
                    },
                },
            ]);
        }
    }, [props.children, location]);

    return (
        <div
            ref={headingRef}
            id={props.children}
            className={scss["heading"]}
            style={styles.get().heading}
        >
            <div
                className={scss["heading__background"]}
                style={styles.get().headingBackground}
            ></div>
            <div className={scss["heading__text-container"]}>
                <b
                    className={scss["heading__text"]}
                    style={styles.get().headingText}
                >
                    {props.children}
                </b>
                {props.options?.subtitle ? (
                    <div className={scss["heading__subtitle"]}>
                        <Heading class={props.class * 9}>
                            {props.options.subtitle}
                        </Heading>
                    </div>
                ) : null}
            </div>
            {props.options?.attachable ? (
                <div className={scss["heading__paragraph-wrapper"]}>
                    <LinkMask to={linkTo}>
                        <div className={scss["heading__paragraph-container"]}>
                            <b
                                className={scss["heading__paragraph"]}
                                style={styles.get().headingText}
                            >
                                ⁋
                            </b>
                        </div>
                    </LinkMask>
                </div>
            ) : null}
        </div>
    );
};

export default Heading;
