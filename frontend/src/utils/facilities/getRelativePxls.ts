const getRelativePxls = <T extends boolean>(
    scalar: number,
    oWidth: number,
    oHeight: number,
    withUnit?: T,
    measure?: boolean
): T extends true ? string : number => {
    const cWidth = window.innerWidth / oWidth;
    const cHeight = window.innerHeight / oHeight;

    const result = !measure
        ? (cWidth >= cHeight ? cWidth : cHeight) * scalar
        : (cWidth <= cHeight ? cWidth : cHeight) * scalar;

    return (withUnit ? `${result}px` : result) as any;
};

export default getRelativePxls;
