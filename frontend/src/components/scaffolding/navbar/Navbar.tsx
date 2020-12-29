// libraries.react
import React from "react";
// locals.react.components
import NavbarIndicator from "./navbarIndicator/NavbarIndicator";
import NavbarChild from "./navbarChild/NavbarChild";
// locals.react.hooks
import useStyles from "../../../utils/customHooks/useStyles";
// locals.styles
import styles from "../../../assets/styles/css/navbar.module.css";

const navbarChildrenConfig = [
    { title: "/docs", kanji: "\u672C" /* 本 */, linkTo: "/docs" },
    { title: "/setup", kanji: "\u5099" /* 備 */, linkTo: "/setup" },
    { title: "/contribute", kanji: "\u8CC7" /* 資 */, linkTo: "/contribute" },
];

const Navbar: React.FunctionComponent = () => {
    const [getStyles, setStyles] = useStyles({
        navbarChildren: {
            transform: "translate3d(0, 100%, 0)",
        },
        navbarIndicator: {
            transform: "translate3d(0, 0, 0)",
        },
    });

    const handleMouseEnter = () => {
        setStyles({
            navbarChildren: {
                transform: "translate3d(0, 0, 0)" as any,
            },
            navbarIndicator: {
                transform: "translate3d(0, -100%, 0)" as any,
            },
        });
    };

    const handleMouseLeave = () => {
        setStyles({
            navbarChildren: {
                transform: "translate3d(0, 100%, 0)",
            },
            navbarIndicator: {
                transform: "translate3d(0, 0, 0)",
            },
        });
    };

    return (
        <div
            className={styles.navbar}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={styles.navbarIndicator}
                style={getStyles().navbarIndicator}
            >
                <NavbarIndicator></NavbarIndicator>
            </div>
            <div
                className={styles.navbarChildren}
                style={getStyles().navbarChildren}
            >
                {navbarChildrenConfig.map((navbarChildConfig, i) => (
                    <NavbarChild key={i} {...navbarChildConfig} />
                ))}
            </div>
            <div className={styles.navbarBorder}></div>
        </div>
    );
};

export default Navbar;
