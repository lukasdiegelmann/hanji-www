/**
 * @author lukasdiegelmann
 */

import React, { useCallback, useEffect, useState } from "react";
import useClean from "./useClean";

type Configuration = {
    ref: React.RefObject<HTMLDivElement | null>;
    orientation: { width: number; height: number };
    options?: Partial<{
        scalar: number;
        lessThanOrEqualTo: boolean;
        debug: any;
    }>;
    handle: (
        result: number,
        debug?: {
            id: any;
            current: { width: number; height: number };
            orientation: { width: number; height: number };
            options: { scalar: number; lessThanOrEqualTo: boolean };
            result: number;
        }
    ) => void;
};

// A react hook that allows one to adjust pixel sizes relative to the window
// size. The hook accepts an array of configs, which again contain a function
// (called a handle) and an options object (though almost every option is
// required).
const useRelativeToComponent = (configs: Configuration[]) => {
    const clean = useClean();
    const [hasBeenExecuted, setHasBeenExecuted] = useState(false);

    const polishOptions = useCallback((options: Configuration["options"]) => {
        return {
            scalar: options?.scalar ?? 1,
            lessThanOrEqualTo: options?.lessThanOrEqualTo ?? false,
        };
    }, []);

    const handleComputing = useCallback(() => {
        configs.forEach((config) => {
            const options = polishOptions(config.options);

            if (config.ref.current) {
                const width =
                    config.ref.current.clientWidth / config.orientation.width;
                const height =
                    config.ref.current.clientHeight / config.orientation.height;

                const getGreaterThanOrEqualTo = () =>
                    width >= height ? width : height;
                const getLessThanOrEqualTo = () =>
                    width <= height ? width : height;

                const result =
                    (!options.lessThanOrEqualTo
                        ? getGreaterThanOrEqualTo()
                        : getLessThanOrEqualTo()) * options.scalar;

                config.handle(result, {
                    id: config.options?.debug,
                    current: { width, height },
                    orientation: { ...config.orientation },
                    options,
                    result,
                });
            }
        });
    }, [polishOptions, configs]);

    useEffect(() => {
        if (!hasBeenExecuted) {
            handleComputing();
            setHasBeenExecuted(true);
        }
        const handleWindowResize = () => handleComputing();

        window.addEventListener("resize", handleWindowResize);

        clean.add(() => {
            window.removeEventListener("resize", handleWindowResize);
        });

        return clean.exec;
    }, [clean, handleComputing, hasBeenExecuted]);
};

export default useRelativeToComponent;
