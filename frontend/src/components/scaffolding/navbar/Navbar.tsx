import React from "react";
import NavbarIndicator from "./navbarIndicator/NavbarIndicator";
import styles from "../../../assets/styles/css/navbar.module.css";

const Navbar: React.FunctionComponent = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.indicator}>
                <NavbarIndicator></NavbarIndicator>
            </div>
            <div className={styles.children}></div>
        </div>
    );
};

export default Navbar;
