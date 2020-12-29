import React, { useCallback, useEffect } from "react";
import getRelativeFontSize from "../../../../utils/misc/getRelativeFontSize";
import useCleanup from "../../../../utils/customHooks/useCleanup";
import useStyles from "../../../../utils/customHooks/useStyles";
import styles from "../../../../assets/styles/css/navbarChild.module.css";
import { Link } from "react-router-dom";

const NavbarChild: React.FunctionComponent<{
    title: string;
    kanji: string;
    linkTo: string;
    options?: Partial<{ underlined: boolean }>;
}> = (props) => {
    const [addCleanup, cleanup] = useCleanup();

    const [getStyles, setStyles] = useStyles({
        navbarChildOnClickLeft: {
            transform: "translate3d(-100%, 0, 0)",
        },
        navbarChildOnClickRight: {
            transform: "translate3d(100%, 0, 0)",
        },
        navbarChildKanji: {
            opacity: "0%",
        },
        navbarChildContentText: {
            fontSize: getRelativeFontSize("20>>1920:1080"),
            textDecoration: props.options?.underlined ? "underline" : "none",
        },
        navbarChildKanjiText: {
            fontSize: getRelativeFontSize("30>>1920:1080"),
        },
        test: {
            backgroundColor: "black",
        },
    });

    const handleClick = () => {
        setStyles(
            [
                {
                    __id: "0:0",
                    __tOffset: 0,
                    navbarChildOnClickLeft: {
                        transform: "translate3d(-49%, 0, 0)" as any,
                    },
                    navbarChildOnClickRight: {
                        transform: "translate3d(49%, 0, 0)" as any,
                    },
                },
                {
                    __id: "0:1",
                    __tOffset: 700,
                    navbarChildKanji: {
                        opacity: "100%" as any,
                    },
                },
                {
                    __id: "0:2",
                    __tOffset: 600,
                    navbarChildKanji: {
                        opacity: "0%" as any,
                    },
                },
                {
                    __id: "0:2",
                    __tOffset: 400,
                    navbarChildOnClickLeft: {
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    navbarChildOnClickRight: {
                        transform: "translate3d(100%, 0, 0)",
                    },
                },
            ],
            {
                isSafe: true,
            }
        );
    };

    const handleWindowResize = useCallback(() => {
        setStyles({
            navbarChildContentText: {
                fontSize: getRelativeFontSize("20>>1920:1080"),
            },
            navbarChildKanjiText: {
                fontSize: getRelativeFontSize("30>>1920:1080"),
            },
        });
    }, [setStyles]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        addCleanup(() => {
            window.removeEventListener("resize", handleWindowResize);
        });

        return cleanup;
    });

    return (
        <div className={styles.navbarChild}>
            <Link
                to={props.linkTo}
                className={styles.navbarChildViewport}
                onClick={handleClick}
                style={getStyles().test}
            >
                <div className={styles.navbarChildOnClick}>
                    <div
                        className={styles.navbarChildOnClickDoor}
                        style={getStyles().navbarChildOnClickLeft}
                    ></div>
                    <div
                        className={styles.navbarChildOnClickDoor}
                        style={getStyles().navbarChildOnClickRight}
                    ></div>
                </div>
                <div className={styles.navbarChildContent}>
                    <b
                        className={styles.navbarChildContentText}
                        style={getStyles().navbarChildContentText}
                    >
                        {props.title}
                    </b>
                </div>
                <div
                    className={styles.navbarChildKanji}
                    style={getStyles().navbarChildKanji}
                >
                    <b
                        className={styles.navbarChildKanjiText}
                        style={getStyles().navbarChildKanjiText}
                    >
                        {props.kanji}
                    </b>
                </div>
            </Link>
        </div>
    );
};

export default NavbarChild;
