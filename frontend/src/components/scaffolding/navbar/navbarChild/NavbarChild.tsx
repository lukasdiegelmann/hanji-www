// libraries.react
import React, { useCallback, useEffect, useRef } from "react";
// locals.react.hook
import useAsyncStyles from "../../../../utils/customHooks/useAsyncStyles";
import useCleanup from "../../../../utils/customHooks/useCleanup";
// locals.styles
import styles from "../../../../assets/styles/css/navbarChild.module.css";

const NavbarChild: React.FunctionComponent<{ text: string }> = (props) => {
    const asyncStyles = useAsyncStyles({
        navbarChildText: { fontSize: "30|>1920|1080" },
    });

    return (
        <div className={styles.navbarChild}>
            <div className={styles.navbarChildViewport}>
                <div
                    className={styles.navbarChildText}
                    style={asyncStyles("navbarChildText")}
                >
                    {props.text}
                </div>
            </div>
        </div>
    );
};

export default NavbarChild;
