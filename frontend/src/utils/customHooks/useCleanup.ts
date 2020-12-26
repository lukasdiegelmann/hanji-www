// libraries.react
import { useRef } from "react";

const useCleanup = () => {
    const cleanups = useRef<Function[]>([]);

    const addCleanup = (cleanupFunc: Function) =>
        (cleanups.current = [...cleanups.current, cleanupFunc]);
    const cleanup = () => {
        cleanups.current.forEach((cleanupFunc) => cleanupFunc());
        cleanups.current = [];
    };

    return [addCleanup, cleanup, cleanups] as [
        typeof addCleanup,
        typeof cleanup,
        typeof cleanups
    ];
};

export default useCleanup;
