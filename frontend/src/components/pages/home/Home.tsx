import React from "react";
import Heading from "../../essence/displays/heading/Heading";
import Footer from "../../scaffolding/footer/Footer";
import Pagify from "../../essence/wrappers/pagify/Pagify";

const Home: React.FunctionComponent = () => {
    return (
        <Pagify footer={<Footer />}>
            <Heading class={0.3}>Hanji Docs.</Heading>
            <Heading class={2} options={{ backdropped: true }}>
                A documentation for the discord bot
            </Heading>
        </Pagify>
    );
};

export default Home;
