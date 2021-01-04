import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import Message from "../../essence/displays/message/Message";
import Navbar from "../navbar/Navbar";
import Player from "../player/Player";
import skeletonSlice from "./Skeleton.slice";
import scss from "./Skeleton.module.scss";

const Home = React.lazy(() => import("../../pages/home/Home"));
const Docs = React.lazy(() => import("../../pages/docs/Docs"));
const Setup = React.lazy(() => import("../../pages/setup/Setup"));
const Contribute = React.lazy(
    () => import("../../pages/contribute/Contribute")
);
const Meta = React.lazy(() => import("../../pages/meta/Meta"));

type Props = ConnectedProps<typeof connector>;

const Skeleton: React.FunctionComponent<Props> = (props) => {
    useEffect(() => {
        fetch("http://192.168.178.26:9000/commands")
            .then((res) => res.json())
            .then((res) => {
                props.updateCommands(res);
            });
    }, [props]);

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
                            <Route exact path="/meta" component={Meta} />
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

const connector = connect(null, (dispatch) => ({
    updateCommands: (commands: any) => {
        dispatch(skeletonSlice.actions.updateCommands(commands));
    },
}));

export default connector(Skeleton);
