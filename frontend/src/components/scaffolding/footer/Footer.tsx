import React, { useMemo } from "react";
import HoverButton from "../../essence/controls/hover-button/HoverButton";
import LinkMask from "../../essence/wrappers/link-mask/LinkMask";
import NavbarIndicator from "../navbar/navbar-indicator/NavbarIndicator";
import scss from "./Footer.module.scss";

const Footer: React.FunctionComponent = () => {
    const footerLinkConfigs = useMemo(
        () => [
            {
                text: "Imprint",
                title: "残像",
                to: "/meta#imprint",
            },
            {
                text: "Copyright Notices",
                title: "著作権",
                to: "/meta#copyright",
            },
        ],
        []
    );

    return (
        <div className={scss["footer"]}>
            <div className={scss["footer__logo"]}>
                <NavbarIndicator />
            </div>
            <div className={scss["footer__link-container"]}>
                {footerLinkConfigs.map((config, i) => (
                    <div key={i} className={scss["footer__link"]}>
                        <LinkMask to={config.to}>
                            <HoverButton {...config}></HoverButton>
                        </LinkMask>
                    </div>
                ))}
            </div>
            <div className={scss["footer__notices-container"]}>
                <b className={scss["footer__notices"]}>
                    © lukasdiegelmann 2020
                </b>
            </div>
        </div>
    );
};

export default Footer;
