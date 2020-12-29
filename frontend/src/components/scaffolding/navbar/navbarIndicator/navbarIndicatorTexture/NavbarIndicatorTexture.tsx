import React from "react";

const NavbarIndicatorTexture: React.FunctionComponent<{
    size: number;
}> = (props) => {
    const kanjiAsUnicode = "\u30DC"; // ボ

    return (
        <div
            style={{
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
                {kanjiAsUnicode}
            </b>
        </div>
    );
};

export default NavbarIndicatorTexture;
