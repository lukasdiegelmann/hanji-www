import React, { useMemo } from "react";
import NavbarIndicator from "./navbar-indicator/NavbarIndicator";
import LinkMask from "../../essence/wrappers/link-mask/LinkMask";
import HoverButton from "../../essence/controls/hover-button/HoverButton";
import useStyles from "../../../@utils/useStyles";
import scss from "./Navbar.module.scss";

const Navbar: React.FunctionComponent = () => {
    const styles = useStyles({
        navbarChildren: {
            transform: "translate3d(0, 100%, 0)",
        },
        navbarIndicator: {
            transform: "translate3d(0, 0, 0)",
        },
    });

    const navbarChildConfigs = useMemo(
        () => [
            { text: "docs", title: "\u672C" /* 本 */, to: "/docs" },
            { text: "setup", title: "\u5099" /* 備 */, to: "/setup" },
            { text: "contribute", title: "\u8CC7" /* 資 */, to: "/contribute" },
        ],
        []
    );

    const handleMouseEnter = () => {
        styles.set({
            navbarChildren: {
                transform: "translate3d(0, 0, 0)" as any,
            },
            navbarIndicator: {
                transform: "translate3d(0, -100%, 0)" as any,
            },
        });
    };

    const handleMouseLeave = () => {
        styles.set({
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
            className={scss["navbar"]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={scss["navbar__indicator"]}
                style={styles.get().navbarIndicator}
            >
                <NavbarIndicator></NavbarIndicator>
            </div>
            <div
                className={scss["navbar__children"]}
                style={styles.get().navbarChildren}
            >
                {navbarChildConfigs.map((config, index) => (
                    <div key={index} className={scss["navbar__child"]}>
                        <div className={scss["navbar_child_viewport"]}>
                            <LinkMask {...config}>
                                <HoverButton
                                    {...config}
                                    appearance={{
                                        crosshaired: true,
                                    }}
                                ></HoverButton>
                            </LinkMask>
                        </div>
                    </div>
                ))}
            </div>
            <div className={scss["navbar__border"]} />
        </div>
    );
};

export default Navbar;
