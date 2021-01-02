/**
 * @author lukasdiegelmann
 */

import CSS from "csstype";
import { useRef, useState } from "react";

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
type MapComponentToStyles = { [k: string]: CSS.Properties };
type SetInput<T> =
    | RecursivePartial<T>
    | (RecursivePartial<T> & {
          __id: string /* => `${number}:${number}` */;
          __tOffset: number;
          __middleware?: () => void;
      })
    | (RecursivePartial<T> & {
          __id: string /* => `${number}:${number}` */;
          __tOffset: number;
          __middleware?: () => void;
      })[];

const deepMerge = (...sources: any) => {
    let acc = {};
    for (const source of sources) {
        if (source instanceof Array) {
            if (!(acc instanceof Array)) {
                acc = [];
            }
            acc = [...(acc as any), ...source];
        } else if (source instanceof Object) {
            for (let [key, value] of Object.entries(source)) {
                if (value instanceof Object && key in acc) {
                    value = deepMerge((acc as any)[key], value);
                }
                acc = { ...acc, [key]: value };
            }
        }
    }
    return acc;
};

const useStyles = <T extends MapComponentToStyles>(mapComponentToStyles: T) => {
    const stateRef = useRef(mapComponentToStyles);
    const [state, setState] = useState(stateRef.current);
    const timeouts = useRef<{ [id: string]: NodeJS.Timeout }>({});

    const validateNewTimeline = (id: string, isSafe: boolean | undefined) => {
        const checkIfTimelineExists = (id: string) => {
            for (let timeoutID in timeouts.current) {
                const timelineID = timeoutID.split(":")[0];

                if (id.match(new RegExp(`^${timelineID}:\\d+$`))) {
                    return true;
                }
            }

            return false;
        };

        return (isSafe && !checkIfTimelineExists(id)) || !isSafe;
    };

    const set = (
        input: SetInput<T>,
        options?: Partial<{ isSafe: boolean }>
    ) => {
        if (input instanceof Array) {
            if (validateNewTimeline(input[0].__id, options?.isSafe)) {
                for (let i = { i: 0, k: 0 }; i.i < input.length; i.i++) {
                    const { __tOffset, __id, __middleware, ...slice } = input[
                        i.i
                    ];
                    i.k += __tOffset;

                    timeouts.current[__id] = setTimeout(() => {
                        if (typeof __middleware === "function") {
                            __middleware();
                        }

                        const result = deepMerge(
                            stateRef.current,
                            slice
                        ) as any;
                        stateRef.current = result;
                        setState(result);
                        delete timeouts.current[__id as string];
                    }, i.k);
                }
            }
        } else if (input.__tOffset) {
            if (validateNewTimeline(input.__id as string, options?.isSafe)) {
                const { __tOffset, __id, __middleware, ...slice } = input;

                timeouts.current[__id as string] = setTimeout(() => {
                    if (typeof __middleware === "function") {
                        __middleware();
                    }

                    const result = deepMerge(stateRef.current, slice) as any;
                    stateRef.current = result;
                    setState(result);
                    delete timeouts.current[__id as string];
                }, __tOffset as number);
            }
        } else {
            const result = deepMerge(stateRef.current, input) as any;
            stateRef.current = result;
            setState(result);
        }
    };

    const get = () => state;

    const clear = (at?: string) => {
        for (let id in timeouts.current) {
            if (at) {
                if (at.match(/^\d+:\d+$/)) {
                    if (at === id) {
                        clearTimeout(timeouts.current[id]);
                        break;
                    }
                }
                if (at.match(/^\d+$/)) {
                    if (at === id.split(":")[0]) {
                        clearTimeout(timeouts.current[id]);
                        continue;
                    }
                }
            } else {
                clearTimeout(timeouts.current[id]);
                continue;
            }
        }
    };

    return { get, set, clear };
};

export default useStyles;
