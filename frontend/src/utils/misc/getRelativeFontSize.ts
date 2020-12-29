const getRelativeFontSize = (string: string) => {
    const structure: number[][] = string
        .split(">>")
        .map((v) => v.split(":").map((v) => parseInt(v)));

    const relativeWidth = window.innerWidth / structure[1][0];
    const relativeHeight = window.innerHeight / structure[1][1];

    const scalar =
        relativeHeight > relativeWidth ? relativeWidth : relativeHeight;

    return `${structure[0][0] * scalar}px`;
};

export default getRelativeFontSize;
