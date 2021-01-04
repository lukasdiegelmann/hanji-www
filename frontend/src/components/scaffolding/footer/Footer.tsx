import React from "react";
import Heading from "../../essence/displays/heading/Heading";
import LinkMask from "../../essence/wrappers/link-mask/LinkMask";
import Logo512 from "../../../@assets/.png/logo512.png";
import scss from "./Footer.module.scss";

const Footer: React.FunctionComponent = () => {
    const footerConfig = [
        {
            name: "Contact",
            entries: [
                {
                    name: "Imprint",
                    to: "/meta#imprint",
                },
            ],
        },
        {
            name: "Rights",
            entries: [
                {
                    name: "Copyright",
                    to: "/meta#copyright",
                },
                {
                    name: "Licenses",
                    to: "/meta#licenses",
                },
            ],
        },
    ];

    return (
        <div className={scss["footer-container"]}>
            <div className={scss["footer-container__border"]} />
            <div className={scss["footer"]}>
                <div className={scss["footer__logo-container"]}>
                    <img
                        className={scss["footer__logo"]}
                        src={Logo512}
                        alt="Logo512"
                    />
                </div>
                {footerConfig.map((config, i) => (
                    <div key={i} className={scss["footer__child"]}>
                        <Heading
                            class={2.8}
                            options={{
                                attachable: true,
                                keepSize: true,
                                style: {
                                    filter: "opacity(90%)",
                                },
                            }}
                        >
                            {config.name}
                        </Heading>
                        {config.entries.map((entry, i) => (
                            <div
                                key={i}
                                className={scss["footer__child__entry"]}
                            >
                                <LinkMask to={entry.to}>
                                    <Heading
                                        class={2.8}
                                        options={{
                                            keepSize: true,
                                            style: {
                                                filter: "opacity(80%)",
                                            },
                                        }}
                                    >
                                        {entry.name}
                                    </Heading>
                                </LinkMask>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
