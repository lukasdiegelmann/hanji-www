import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "../../../assets/styles/css/dive.module.css";

const Dive: React.FunctionComponent = () => {
    return (
        <Router>
            <div className={styles.diveContainer}>
                <div className={styles.headerContainer}>
                    <Navbar />
                </div>
                <div className={styles.contentComplexContainer}>
                    <div className={styles.mainContainer}></div>
                    <div className={styles.footerContainer}></div>
                </div>
            </div>
        </Router>
    );
};

export default Dive;
