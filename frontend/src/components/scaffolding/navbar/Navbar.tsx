// libraries.react
import React from "react";
// locals.react.components
import NavbarIndicator from "./navbarIndicator/NavbarIndicator";
import NavbarChild from "./navbarChild/NavbarChild";
// locals.react.hooks
import useAsyncStyles from "../../../utils/customHooks/useAsyncStyles";
// locals.styles
import styles from "../../../assets/styles/css/navbar.module.css";

const navbarChildrenConfig = [
    { text: "/commands" },
    { text: "/contribute" },
    { text: "/setup" },
];

const Navbar: React.FunctionComponent = () => {
    const asyncStyles = useAsyncStyles({
        navbarChildren: {
            transform: "translate3d(0, 100%, 0)",
        },
        navbarIndicator: {
            transform: "translate3d(0, 0, 0)",
        },
    });

    const handleMouseEnter = () => {
        asyncStyles([
            [
                {
                    navbarChildren: {
                        transform: "translate3d(0, 0, 0)" as any,
                    },
                    navbarIndicator: {
                        transform: "translate3d(0, -100%, 0)" as any,
                    },
                },
                0,
            ],
        ]);
    };
    const handleMouseLeave = () => {
        asyncStyles([
            [
                {
                    navbarChildren: {
                        transform: "translate3d(0, 100%, 0)" as any,
                    },
                    navbarIndicator: {
                        transform: "translate3d(0, 0, 0)" as any,
                    },
                },
                0,
            ],
        ]);
    };

    return (
        <div
            className={styles.navbar}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={styles.navbarIndicator}
                style={asyncStyles("navbarIndicator")}
            >
                <NavbarIndicator></NavbarIndicator>
            </div>
            <div
                className={styles.navbarChildren}
                style={asyncStyles("navbarChildren")}
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
