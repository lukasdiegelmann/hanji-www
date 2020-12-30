import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Message from "../../essence/displays/message/Message";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styles from "../../../assets/styles/css/skeleton.module.css";
import scss from "./Skeleton.module.scss";

const Home = React.lazy(() => import("../../pages/home/Home"));
const Docs = React.lazy(() => import("../../pages/docs/Docs"));
const Setup = React.lazy(() => import("../../pages/setup/Setup"));
const Contribute = React.lazy(
    () => import("../../pages/contribute/Contribute")
);

const Skeleton: React.FunctionComponent = () => {
    return (
        <Router>
            <div className={scss["skeleton"]}>
                <div className={scss["header"]}>
                    <Navbar />
                </div>
                <div className={scss["complex"]}>
                    <Suspense fallback={<Message />}>
                        <div className={scss["content"]}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/docs" component={Docs} />
                            <Route
                                exact
                                path="/contribute"
                                component={Contribute}
                            />
                            <Route exact path="/setup" component={Setup} />
                        </div>
                        <div className={scss["footer"]}>
                            <Footer />
                        </div>
                    </Suspense>
                </div>
            </div>
        </Router>
    );
};

export default Skeleton;
