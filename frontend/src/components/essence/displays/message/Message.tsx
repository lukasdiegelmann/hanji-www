import React from "react";
import Particles from "react-tsparticles";
import HoverButton from "../../controls/hover-button/HoverButton";
import particlesConfig from "./particles.config.json";
import scss from "./Message.module.scss";

type Props = {
    content?: {
        text: string;
        title: string;
        to: string;
    };
};

const Message: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={scss["message"]}>
            <Particles
                id={scss["message__particles"]}
                options={particlesConfig}
            />
            {props.content ? (
                <div className={scss["message__content"]}>
                    <HoverButton
                        {...props.content}
                        appearance={{ letterspacing: true }}
                    ></HoverButton>
                </div>
            ) : null}
        </div>
    );
};

export default Message;
