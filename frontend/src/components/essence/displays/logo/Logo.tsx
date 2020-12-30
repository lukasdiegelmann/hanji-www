/**
 * @author lukasdiegelmann
 */

import React from "react";

type Props = {
    // This is the value of the length of the div container. Note that I wrote
    // length, since it is a perfect square (or at least a square since all real
    // numbers are the domain of this component).
    size: number;
};

// This react function component will pose as the texture and image, or whatever
// type you want it to be, of the website's logo. Though it is quiet simple, it
// was not possible to use relative dimensional values here, since THREE's
// CanvasTexture does not really support that (it resulted in cut-off edges and
// other not pleasently looking cubes).
const Logo: React.FunctionComponent<Props> = (props) => {
    // The kanji (name of the chinese/japanese script xor signs) always stays
    // the same and is not dependent of the 'props' object.
    //
    // Note: The unicode notation is used here for compatability purposes and
    // the kanji written out is positioned behind it as a comment.
    const title = "\u30DC"; // ボ

    return (
        <div
            style={{
                // The style consists of a simple flexbox system that centers
                // its children. Also, the properties 'width', 'height',
                // 'borderSize' and 'fontSize' are props dependent.
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: `${props.size}px`,
                width: `${props.size}px`,
                border: `${props.size / 18}px black solid`,
                backgroundColor: "white",
            }}
        >
            <b
                style={{
                    fontSize: `${props.size / 1.8}px`,
                    fontFamily: "Source Han Serif Heavy",
                }}
            >
                {title}
            </b>
        </div>
    );
};

export default Logo;
