import React, { ReactElement } from "react";
import scss from "./Pagify.module.scss";

type Props = {
    children: ReactElement | ReactElement[];
    footer: ReactElement;
};

const Pagify: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={scss["pagify"]}>
            <div className={scss["pagify__content"]}>{props.children}</div>
            <div className={scss["pagify__footer"]}>{props.footer}</div>
        </div>
    );
};

export default Pagify;
