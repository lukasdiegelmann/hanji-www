import React, { ReactElement } from "react";
import useStyles from "../../../../@utils/useStyles";
import scss from "./Flow.module.scss";

type Props = {
    children: ReactElement[];
};

const Flow: React.FunctionComponent<Props> = (props) => {
    return (
        <div className={scss["flow"]}>
            {props.children.map((child: any, i) => (
                <div key={i} className={scss["flow__child"]}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Flow;
