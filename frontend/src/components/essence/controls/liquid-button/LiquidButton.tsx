import React from "react";
import scss from "./LiquidButton.module.scss";

type Props = {
    text: string;
};

const BubbleButton: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={scss["liquid-button"]}>
            <div className={scss["liquid-button__text-container"]}>
                <b className={scss["liquid-button__text"]}>{props.text}</b>
            </div>
            <div className={scss["liquid-button__liquid"]} />
        </div>
    );
};

export default BubbleButton;
