import React, { ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import Pagify from "../../essence/wrappers/pagify/Pagify";
import Footer from "../../scaffolding/footer/Footer";
import Flow from "../../essence/wrappers/flow/Flow";
import Heading from "../../essence/displays/heading/Heading";
import Paragraph from "../../essence/displays/paragraph/Paragraph";
import useStyles from "../../../@utils/useStyles";
import { RootState } from "../../../@intrinsic/store";
import scss from "./Docs.module.scss";

type Props = ConnectedProps<typeof connector>;

const Docs: React.FunctionComponent<Props> = (props) => {
    const fabricateDocEntry = (
        name: string,
        description: string
    ): ReactElement => (
        <div key={`${name}#${Math.random()}`} className={scss["docs__entry"]}>
            <div className={scss["docs__entry__name-container"]}>
                <Paragraph
                    class={3}
                    options={{
                        keepSize: true,
                        style: { fontFamily: "Consolas" },
                    }}
                >
                    ?<b>{name}</b>
                </Paragraph>
            </div>
            <div className={scss["docs__entry__desc-container"]}>
                <div className={scss["docs__entry__desc__border-container"]} />
                <Paragraph
                    class={3}
                    options={{
                        keepSize: true,
                        style: {
                            fontFamily: "Source Han Serif Regular",
                        },
                    }}
                >
                    {description}
                </Paragraph>
            </div>
        </div>
    );

    const fabricateDocEntries = (): ReactElement[] => {
        const elemStock: ReactElement[] = [];

        for (let name in props.state.commands) {
            const description = props.state.commands[name];

            elemStock.push(fabricateDocEntry(name, description));
        }

        return elemStock;
    };

    return (
        <Pagify footer={<Footer />}>
            <Heading class={0}>Docs</Heading>
            <Flow>{fabricateDocEntries()}</Flow>
        </Pagify>
    );
};

const connector = connect((state: RootState) => ({
    state: { commands: state.skeleton.data.commands },
}));

export default connector(Docs);
