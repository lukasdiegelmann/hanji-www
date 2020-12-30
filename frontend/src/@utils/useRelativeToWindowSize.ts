/**
 * @author lukasdiegelmann
 */

import { useCallback, useEffect, useRef } from "react";
import useClean from "./useClean";

// A react hook that allows one to adjust pixel sizes relative to the window
// size. The hook accepts an array of configs, which again contain a function
// (called a handle) and an options object (though almost every option is
// requiered).
const useRelativeToWindowSize = (
    configs: {
        options: {
            width: number;
            height: number;
            scalar: number;
            comparisonMode?: "greaterOrEqualTo" | "lessOrEqualTo";
        };
        handle: (scalar: number) => void;
    }[]
) => {
    const clean = useClean();

    const hasExecuted = useRef(false);

    const handleExecution = useCallback(() => {
        hasExecuted.current = true;

        configs.forEach((config) => {
            const relWidth = window.innerWidth / config.options.width;
            const relHeight = window.innerHeight / config.options.height;

            const getGreaterOrEqualTo = () =>
                relWidth > relHeight ? relWidth : relHeight;

            const getLessOrEqualTo = () =>
                relWidth < relHeight ? relWidth : relHeight;

            const relValue =
                config.options.comparisonMode === "greaterOrEqualTo"
                    ? getGreaterOrEqualTo()
                    : getLessOrEqualTo();

            config.handle(relValue * config.options.scalar);
        });
    }, [configs]);

    useEffect(() => {
        if (!hasExecuted.current) {
            handleExecution();
        }

        window.addEventListener("resize", handleExecution);

        clean.add(() => {
            window.removeEventListener("resize", handleExecution);
        });

        return clean.exec;
    }, [clean, handleExecution]);
};

export default useRelativeToWindowSize;
