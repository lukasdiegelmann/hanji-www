import React from "react";
import Pagify from "../../essence/wrappers/pagify/Pagify";
import Footer from "../../scaffolding/footer/Footer";
import Heading from "../../essence/displays/heading/Heading";
import Paragraph from "../../essence/displays/paragraph/Paragraph";
import Flow from "../../essence/wrappers/flow/Flow";
import Video from "../../essence/displays/video/Video";

const Setup: React.FunctionComponent = () => {
    return (
        <Pagify footer={<Footer />}>
            <Heading class={0}>This is how to set it up.</Heading>
            <Flow>
                <Video
                    URI={import("../../../@assets/.mp4/luffy-vs-blueno.mp4")}
                    ID={"luffy-blueno"}
                    options={{
                        fullscreen: true,
                        backdropped: true,
                        reactPlayer: {
                            height: 500,
                            muted: true,
                        },
                    }}
                />
                <Paragraph
                    class={3}
                    options={{
                        keepSize: true,
                        style: { hyphens: "auto", textAlign: "justify" },
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. At risus viverra adipiscing at in tellus. Sit amet
                    aliquam id diam maecenas ultricies mi eget mauris. Nullam ac
                    tortor vitae purus. Purus sit amet luctus venenatis lectus.
                    Euismod nisi porta lorem mollis aliquam ut. Rutrum tellus
                    pellentesque eu tincidunt. Ut sem viverra aliquet eget sit.
                    Vel risus commodo viverra maecenas accumsan lacus vel
                    facilisis volutpat. Arcu dictum varius duis at consectetur
                    lorem donec massa. Tortor id aliquet lectus proin nibh nisl
                    condimentum id. Faucibus et molestie ac feugiat sed lectus.
                    Magna fermentum iaculis eu non diam phasellus vestibulum
                    lorem sed. Quam nulla porttitor massa id neque aliquam.
                </Paragraph>
            </Flow>
        </Pagify>
    );
};

export default Setup;
