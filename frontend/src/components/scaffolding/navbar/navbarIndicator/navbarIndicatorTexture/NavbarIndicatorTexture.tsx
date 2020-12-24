import React from "react";
import styles from "../../../../../assets/styles/css/navbarIndicatorTexture.module.css";

const NavbarIndicatorTexture = () => {
    const kanjiAsUnicode = "\u30DC"; // https://unicodelookup.com/#ボ/1

    return <div style={{ backgroundColor: "red" }}>{kanjiAsUnicode}</div>;
};

export default NavbarIndicatorTexture;
