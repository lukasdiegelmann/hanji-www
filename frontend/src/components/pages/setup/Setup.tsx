import React from "react";
import Pagify from "../../essence/wrappers/pagify/Pagify";
import Footer from "../../scaffolding/footer/Footer";
import Heading from "../../essence/displays/heading/Heading";

const Setup: React.FunctionComponent = () => {
    return (
        <Pagify footer={<Footer />}>
            <Heading class={0}>This is how to set it up.</Heading>
        </Pagify>
    );
};

export default Setup;
