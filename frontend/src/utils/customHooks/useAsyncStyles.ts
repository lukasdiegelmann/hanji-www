// libraries.types
import cssTypes from "csstype";
// libraries.react
import { useRef, useState, useCallback, useEffect } from "react";

// main types

// - config

export type configT<T> = { [key: string]: T | configT<T> };

// - return

export type returningT<T> = <
    K extends keyof T | [Partial<T> | Function, number?][]
>(
    arg: K
) => K extends keyof T ? T[K] : undefined;

// - hook

export type hookT = <T extends configT<cssTypes.Properties>>(
    config: T
) => returningT<T>;

// sub types

// - store

export type storeT<T> = { get: () => T; set: (v: Partial<T>) => void };

// - plugin

export type pluginT = (parse: string) => string;

// - rules

export type rulesT = {
    tests: {
        key: RegExp;
        syntax: RegExp;
    };
    loader: pluginT;
}[];

// - apply

export type applyT = (target: { [key: string]: {} }) => {};

// packaged

// - generate

export type generateT = <T extends configT<cssTypes.Properties>>(
    iterations: number,
    toCopy: T
) => { [key: string]: T };

// - combine

export type combineT = (...partials: {}[]) => cssTypes.Properties;

// - save

export type safeT = (func: any) => void;

// code

// - plugins

const fontSyntaxParser: pluginT = (string) => {
    const structure: number[][] = string
        .split("|>")
        .map((v) => v.split("|").map((v) => parseInt(v)));

    const relativeWidth = window.innerWidth / structure[1][0];
    const relativeHeight = window.innerHeight / structure[1][1];

    const scalar =
        relativeHeight > relativeWidth ? relativeWidth : relativeHeight;

    return `${structure[0][0] * scalar}px`;
};

// - hook

const useAsyncStyles: hookT = (config) => {
    // state mangement
    const reference = useRef(config);
    const state = useState(reference.current);

    // store
    const store = useRef<storeT<typeof config>>({
        get: () => reference.current,
        set: (v) =>
            state[1]((reference.current = { ...reference.current, ...v })),
    });

    // rule sets (applied on initialization)
    const rules = useRef<rulesT>([
        {
            tests: {
                key: /fontSize/,
                syntax: /^\d+\|>\d+\|\d+$/,
            },
            loader: fontSyntaxParser,
        },
    ]);

    // applies rule sets via a full iteration over an arbitrary object
    const apply = useCallback<applyT>((tree) => {
        const changes = { ...tree };

        for (const branch in changes) {
            if (typeof changes[branch] === "string") {
                let string = changes[branch] as string;

                // apply rule sets to string
                rules.current.forEach((rule) => {
                    if (
                        branch.match(rule.tests.key) &&
                        string.match(rule.tests.syntax)
                    ) {
                        string = rule.loader(string);
                    }
                });

                changes[branch] = string;
            } else {
                changes[branch] = apply(changes[branch]);
            }
        }

        return changes;
    }, []);

    // dumpster for timeout signatures that have to be cleaned up.
    const toClean = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        const image = store.current.get();
        const applyRules = () => store.current.set(apply(image));

        // initial application
        applyRules();

        window.addEventListener("resize", applyRules);

        return () => {
            // clears all timeouts put into the toClean reference
            toClean.current.forEach((signature) => clearTimeout(signature));

            // resets the reference to an empty array => no redundancy
            toClean.current = [];

            // removes the window resize listener
            window.removeEventListener("resize", applyRules);
        };
    }, [apply]);

    return (arg) => {
        if (arg instanceof Array) {
            // SET
            let timeAccumulator = 0;

            for (let i = 0; i < arg.length; i++) {
                const currentTime =
                    typeof arg[i][1] === undefined ? 0 : arg[i][1];
                const currentOperator = arg[i][0];

                timeAccumulator += currentTime;

                if (typeof currentOperator === "function") {
                    toClean.current.push(
                        setTimeout(() => currentOperator(), timeAccumulator)
                    );
                } else {
                    toClean.current.push(
                        setTimeout(
                            () => store.current.set(currentOperator),
                            timeAccumulator
                        )
                    );
                }
            }

            return undefined as any;
        }

        // GET

        return reference.current[arg as number];
    };
};

// - packaged

// - - generate

const generate: generateT = (iterations, toCopy) => {
    let copyAccumulator: { [key: string]: typeof toCopy } = {};

    for (let i = 0; i < iterations; i++) {
        copyAccumulator = { ...copyAccumulator, [i]: { ...toCopy } };
    }

    return copyAccumulator;
};

// - - combine

const combine: combineT = (...partials) =>
    partials.reduce(
        (accumulator, partial) => ({ ...accumulator, ...partial }),
        {}
    );

// - - safe

const safe: safeT = (func) => {
    if (typeof func === "function") {
        func();
    }
};

// dispatch

export const packaged = {
    gen: generate,
    com: combine,
    saf: safe,
};

export default useAsyncStyles;
