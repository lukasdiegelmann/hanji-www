import React, { ReactElement, useRef } from "react";
import CSS from "csstype";
import useRelativeToComponent from "../../../../@utils/useRelativeToComponent";
import useStyles from "../../../../@utils/useStyles";
import scss from "./Paragraph.module.scss";

type Props = {
    class: number;
    children: (string | ReactElement)[] | (string | ReactElement);
    options?: Partial<{
        keepSize: boolean;
        style: CSS.Properties;
    }>;
};

const Paragraph: React.FunctionComponent<Props> = (props) => {
    const paragraphRef = useRef<HTMLDivElement>(null);

    const styles = useStyles({
        paragraphText: {
            fontSize: `${200 / 2 ** props.class}px`,
            ...props.options?.style,
        },
    });

    useRelativeToComponent([
        {
            ref: paragraphRef,
            orientation: {
                width: 1920,
                height: 1080,
            },
            handle: (result) => {
                if (!props.options?.keepSize) {
                    styles.set({
                        paragraphText: {
                            fontSize: `${(200 * result) / 2 ** props.class}px`,
                        },
                    });
                }
            },
        },
    ]);

    return (
        <div ref={paragraphRef} className={scss["paragraph"]}>
            <p
                className={scss["paragraph__text"]}
                style={styles.get().paragraphText}
            >
                {props.children}
            </p>
        </div>
    );
};

export default Paragraph;
