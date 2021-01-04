import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Message from "../../essence/displays/message/Message";
import Navbar from "../navbar/Navbar";
import Player from "../player/Player";
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
                <div className={scss["skeleton__header"]}>
                    <Navbar />
                </div>
                <div className={scss["skeleton__content"]}>
                    <Suspense fallback={<Message />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/docs" component={Docs} />
                            <Route
                                exact
                                path="/contribute"
                                component={Contribute}
                            />
                            <Route exact path="/setup" component={Setup} />
                            <Route
                                component={() => (
                                    <Message
                                        content={{
                                            text: "Not Found",
                                            title: "無い",
                                            to: "/",
                                        }}
                                    />
                                )}
                            />
                        </Switch>
                    </Suspense>
                </div>
                <Player />
            </div>
        </Router>
    );
};

export default Skeleton;
