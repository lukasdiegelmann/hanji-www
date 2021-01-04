import React from "react";
import Heading from "../../essence/displays/heading/Heading";
import Paragraph from "../../essence/displays/paragraph/Paragraph";
import Flow from "../../essence/wrappers/flow/Flow";
import Footer from "../../scaffolding/footer/Footer";
import Pagify from "../../essence/wrappers/pagify/Pagify";

const Contribute: React.FunctionComponent = () => {
    return (
        <Pagify footer={<Footer />}>
            <Heading class={0.7}>Want to contribute? Here's how!</Heading>
            <Flow>
                {[
                    <Paragraph
                        class={2}
                        options={{
                            keepSize: true,
                            style: { textAlign: "center" },
                        }}
                    >
                        Just do stuff!
                    </Paragraph>,
                ]}
            </Flow>
        </Pagify>
    );
};

export default Contribute;
