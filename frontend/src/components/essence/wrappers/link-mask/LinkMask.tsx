import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import scss from "./LinkMask.module.scss";

type Props = {
    to: string;
    children: ReactNode;
};

const LinkMask: React.FunctionComponent<Props> = (props) => {
    return (
        <Link to={props.to} className={scss["link-mask"]}>
            {props.children}
        </Link>
    );
};

export default LinkMask;
