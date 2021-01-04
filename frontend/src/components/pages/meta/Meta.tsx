import React from "react";
import Footer from "../../scaffolding/footer/Footer";
import Heading from "../../essence/displays/heading/Heading";
import Flow from "../../essence/wrappers/flow/Flow";
import Pagify from "../../essence/wrappers/pagify/Pagify";
import Paragraph from "../../essence/displays/paragraph/Paragraph";

const Meta: React.FunctionComponent = () => {
    return (
        <Pagify footer={<Footer />}>
            <Heading
                class={1}
                options={{
                    attachable: true,
                    style: { textTransform: "capitalize" },
                }}
            >
                imprint
            </Heading>
            <Flow>
                {[
                    <Paragraph
                        key={0}
                        class={2}
                        options={{
                            style: { textAlign: "center", fontWeight: "bold" },
                        }}
                    >
                        Lukas Diegelmann
                        <br />
                        Hohenlohestraße 3,
                        <br />
                        36043 Fulda/Edelzell,
                        <br />
                        Deutschland
                        <br />
                        Tel.: 06618620911
                        <br />
                        E-Mail: lukasdiegelmann.business@gmail.com
                        <br />
                    </Paragraph>,
                ]}
            </Flow>
            <Heading
                class={1}
                options={{
                    attachable: true,
                    style: { textTransform: "capitalize" },
                }}
            >
                copyright
            </Heading>
            <Flow>
                {[
                    <Paragraph
                        key={0}
                        class={2}
                        options={{
                            style: { textAlign: "justify", fontWeight: "bold" },
                        }}
                    >
                        <b
                            style={{
                                fontFamily: "Source Han Serif Heavy",
                            }}
                        >
                            Noe Display Bold Font
                        </b>
                        <br />
                        Noe Display Bold by Copyright © 2013 Schick Toikka. All
                        rights reserved. Noe Display is a trademark of Schick
                        Toikka. Unauthorised copying or modification of any of
                        its data is illegal. Therefore publishing this website
                        is illegal.
                    </Paragraph>,
                ]}
            </Flow>
            <Heading
                class={1}
                options={{
                    attachable: true,
                    style: { textTransform: "capitalize" },
                }}
            >
                licenses
            </Heading>
            <Flow>
                {[
                    <Paragraph
                        key={0}
                        class={2}
                        options={{
                            style: { textAlign: "justify", fontWeight: "bold" },
                        }}
                    >
                        <b style={{ fontFamily: "Source Han Serif Heavy" }}>
                            Theano Didot Font
                        </b>
                        <br />
                        SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
                    </Paragraph>,
                ]}
            </Flow>
        </Pagify>
    );
};

export default Meta;
