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
                            loop: true,
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
                    aliqua. Eget dolor morbi non arcu risus quis varius quam
                    quisque. Volutpat lacus laoreet non curabitur gravida arcu.
                    Non arcu risus quis varius. Sit amet commodo nulla facilisi
                    nullam. Nulla aliquet enim tortor at auctor urna nunc id.
                    Sed lectus vestibulum mattis ullamcorper velit. Viverra
                    accumsan in nisl nisi scelerisque eu ultrices vitae auctor.
                    Habitant morbi tristique senectus et. Commodo ullamcorper a
                    lacus vestibulum sed arcu. Ac odio tempor orci dapibus.
                    Aliquam vestibulum morbi blandit cursus risus at ultrices mi
                    tempus. Posuere morbi leo urna molestie. Sit amet facilisis
                    magna etiam tempor orci eu. Fames ac turpis egestas integer.
                    Congue eu consequat ac felis. Mattis pellentesque id nibh
                    tortor id aliquet. Fames ac turpis egestas maecenas pharetra
                    convallis posuere morbi. Mauris pellentesque pulvinar
                    pellentesque habitant morbi tristique senectus et netus. Vel
                    fringilla est ullamcorper eget nulla. Amet est placerat in
                    egestas. Ac auctor augue mauris augue neque gravida. Velit
                    dignissim sodales ut eu sem integer vitae justo eget. Enim
                    facilisis gravida neque convallis a cras. Nunc sed velit
                    dignissim sodales ut eu. Non diam phasellus vestibulum lorem
                    sed risus ultricies. Orci eu lobortis elementum nibh tellus
                    molestie nunc non blandit. Amet luctus venenatis lectus
                    magna fringilla urna porttitor. Elit ut aliquam purus sit
                    amet luctus venenatis lectus. Ac tortor dignissim convallis
                    aenean et tortor at risus viverra. Volutpat diam ut
                    venenatis tellus in metus vulputate. Eu nisl nunc mi ipsum
                    faucibus vitae aliquet nec ullamcorper. In arcu cursus
                    euismod quis viverra nibh cras pulvinar. Bibendum arcu vitae
                    elementum curabitur. Tortor posuere ac ut consequat semper
                    viverra nam. Nec tincidunt praesent semper feugiat nibh sed
                    pulvinar. Purus faucibus ornare suspendisse sed nisi lacus.
                    Nulla aliquet enim tortor at auctor. Dictum sit amet justo
                    donec enim diam. Feugiat scelerisque varius morbi enim. Id
                    aliquet lectus proin nibh nisl condimentum id. Nibh tortor
                    id aliquet lectus proin nibh nisl condimentum. Proin nibh
                    nisl condimentum id venenatis a condimentum. Egestas erat
                    imperdiet sed euismod nisi porta. Mi tempus imperdiet nulla
                    malesuada pellentesque elit eget gravida. Phasellus
                    vestibulum lorem sed risus ultricies tristique nulla aliquet
                    enim. Viverra ipsum nunc aliquet bibendum enim facilisis
                    gravida neque convallis. Sed sed risus pretium quam
                    vulputate. Felis bibendum ut tristique et. Lectus vestibulum
                    mattis ullamcorper velit sed ullamcorper morbi tincidunt.
                    Volutpat consequat mauris nunc congue nisi vitae suscipit
                    tellus mauris. Sagittis vitae et leo duis ut diam quam
                    nulla. Sed egestas egestas fringilla phasellus faucibus
                    scelerisque eleifend. Nunc mi ipsum faucibus vitae aliquet
                    nec ullamcorper sit. Semper feugiat nibh sed pulvinar proin
                    gravida hendrerit lectus a. Eget dolor morbi non arcu risus
                    quis varius quam quisque. Amet facilisis magna etiam tempor
                    orci eu lobortis. Purus ut faucibus pulvinar elementum.
                    Turpis cursus in hac habitasse platea dictumst quisque. Ac
                    turpis egestas sed tempus urna et. Ac felis donec et odio
                    pellentesque diam volutpat commodo sed. Nec nam aliquam sem
                    et tortor consequat id. Imperdiet nulla malesuada
                    pellentesque elit eget gravida cum. Duis at tellus at urna
                    condimentum mattis pellentesque. Aenean vel elit scelerisque
                    mauris pellentesque pulvinar pellentesque. Neque laoreet
                    suspendisse interdum consectetur libero. Massa tempor nec
                    feugiat nisl pretium. Cras ornare arcu dui vivamus arcu
                    felis bibendum. Facilisi nullam vehicula ipsum a arcu
                    cursus. Odio eu feugiat pretium nibh. Sem integer vitae
                    justo eget magna fermentum. Erat imperdiet sed euismod nisi
                    porta lorem mollis aliquam. Ante in nibh mauris cursus
                    mattis molestie a iaculis at. Quis eleifend quam adipiscing
                    vitae proin sagittis nisl rhoncus. Adipiscing elit duis
                    tristique sollicitudin nibh sit amet commodo. Placerat orci
                    nulla pellentesque dignissim enim sit. Fringilla urna
                    porttitor rhoncus dolor. Lectus sit amet est placerat in
                    egestas erat. Tellus pellentesque eu tincidunt tortor
                    aliquam nulla. Faucibus a pellentesque sit amet porttitor.
                </Paragraph>
            </Flow>
        </Pagify>
    );
};

export default Setup;
