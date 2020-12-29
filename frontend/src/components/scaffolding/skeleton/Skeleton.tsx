import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Message from "../../others/message/Message";
import Navbar from "../navbar/Navbar";
import styles from "../../../assets/styles/css/skeleton.module.css";

const Home = React.lazy(() => import("../../pages/home/Home"));
const Docs = React.lazy(() => import("../../pages/docs/Docs"));
const Setup = React.lazy(() => import("../../pages/setup/Setup"));
const Contribute = React.lazy(
    () => import("../../pages/contribute/Contribute")
);

const Skeleton: React.FunctionComponent = () => {
    return (
        <Router>
            <div className={styles.diveContainer}>
                <div className={styles.headerContainer}>
                    <Navbar />
                </div>
                <div className={styles.contentComplexContainer}>
                    <div className={styles.mainContainer}>
                        <Suspense fallback={<Message />}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/docs" component={Docs} />
                            <Route
                                exact
                                path="/contribute"
                                component={Contribute}
                            />
                            <Route exact path="/setup" component={Setup} />
                        </Suspense>
                    </div>
                    <div className={styles.footerContainer}></div>
                </div>
            </div>
        </Router>
    );
};

export default Skeleton;
