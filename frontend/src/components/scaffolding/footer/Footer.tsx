import React, { useCallback, useEffect, useState } from "react";
import FooterLink from "./footerLink/FooterLink";
import NavbarIndicatorTexture from "../navbar/navbarIndicator/navbarIndicatorTexture/NavbarIndicatorTexture";
import useCleanup from "../../../utils/customHooks/useCleanup";
import useStyles from "../../../utils/customHooks/useStyles";
import getRelativePxls from "../../../utils/facilities/getRelativePxls";
import styles from "../../../assets/styles/css/footer.module.css";

const footerLinksConfig = [
    {
        title: "imprint",
        linkTo: "/info#imprint",
    },
];

const Footer: React.FunctionComponent = () => {
    const [addCleanup, cleanup] = useCleanup();
    const [getStyles, setStyles] = useStyles({
        footer: {
            height: getRelativePxls(150, 1920, 1080, true),
        },
    });
    const [iconSize, setIconSize] = useState(
        getRelativePxls(40, 1920, 1080, false)
    );

    const handleWindowResize = useCallback(() => {
        setStyles({
            footer: {
                height: getRelativePxls(150, 1920, 1080, true),
            },
        });
        setIconSize(getRelativePxls(40, 1920, 1080, false));
    }, [setStyles]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        addCleanup(() => {
            window.removeEventListener("resize", handleWindowResize);
        });

        return cleanup;
    }, [cleanup, addCleanup, handleWindowResize]);

    return (
        <div className={styles.footer} style={getStyles().footer}>
            <div className={styles.footerIconContainer}>
                <NavbarIndicatorTexture size={iconSize} />
            </div>
            <div className={styles.footerLinks}>
                {footerLinksConfig.map((footerLinkConfig, i) => (
                    <FooterLink key={i} {...footerLinkConfig} />
                ))}
            </div>
        </div>
    );
};

export default Footer;
