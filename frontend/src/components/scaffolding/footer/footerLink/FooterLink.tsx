import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../../utils/customHooks/useStyles";
import getRelativePxls from "../../../../utils/facilities/getRelativePxls";
import styles from "../../../../assets/styles/css/footerLink.module.css";
import useCleanup from "../../../../utils/customHooks/useCleanup";

const FooterLink: React.FunctionComponent<{ title: string; linkTo: string }> = (
    props
) => {
    const [addCleanup, cleanup] = useCleanup();
    const [getStyles, setStyles] = useStyles({
        footerLink: {
            padding: getRelativePxls(10, 1920, 1080, true),
            fontSize: getRelativePxls(20, 1920, 1080, true),
        },
    });

    const handleWindowResize = useCallback(() => {
        setStyles({
            footerLink: {
                padding: getRelativePxls(10, 1920, 1080, true),
                fontSize: getRelativePxls(20, 1920, 1080, true),
            },
        });
    }, [setStyles]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        addCleanup(() => {
            window.removeEventListener("resize", handleWindowResize);
        });

        return cleanup;
    }, [addCleanup, cleanup, handleWindowResize]);

    return (
        <Link
            to={props.linkTo}
            className={styles.footerLink}
            style={getStyles().footerLink}
        >
            <div className={styles.footerLinkTitle}>{props.title}</div>
        </Link>
    );
};

export default FooterLink;
