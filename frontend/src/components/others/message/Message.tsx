import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./particles.config.json";
import NavbarChild from "../../scaffolding/navbar/navbarChild/NavbarChild";
import styles from "../../../assets/styles/css/message.module.css";

const Message: React.FunctionComponent<{
    title?: string;
    kanji?: string;
    linkTo?: string;
}> = (props) => {
    return (
        <div className={styles.message}>
            <Particles id={styles.messageParticles} options={particlesConfig} />
            {props.title && props.kanji && props.linkTo ? (
                <div className={styles.messageContent}>
                    <NavbarChild
                        kanji={props.kanji}
                        title={props.title}
                        linkTo={props.linkTo}
                        options={{ underlined: true }}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Message;
