import React from "react";

const NavbarIndicatorTexture = () => {
    const kanjiAsUnicode = "\u30DC"; // ボ

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "180px",
                width: "180px",
                border: "10px black solid",
            }}
        >
            <b
                style={{
                    fontSize: "100px",
                    fontFamily: "Source Han Serif Heavy",
                }}
            >
                {kanjiAsUnicode}
            </b>
        </div>
    );
};

export default NavbarIndicatorTexture;
