import React, { ReactElement } from "react";
import scss from "./GhostHand.module.scss";

type Props = {
    children: ReactElement;
};

const GhostHand: React.FunctionComponent<Props> = (props) => {
    return <div className={scss["ghost-hand"]}></div>;
};

export default GhostHand;
