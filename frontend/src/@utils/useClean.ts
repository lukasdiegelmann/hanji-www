/**
 * @author lukasdiegelmann
 */

import { useRef } from "react";

// This react hook is used to handle the final cleanup on a react component with
// a little more elegance. Once invoked, it returns an object with two
// properties ('add', 'exec'), these are to handle the hook.
const useClean = () => {
    // This will hold all cleanup functions in an array, which will be loop
    // through on the exec() handle.
    const dumpster = useRef<Function[]>([]);

    return {
        // Adds a new cleanup function to the dumpster array. Note that this
        // function can do anything and will not be hindered on any asynchronous
        // tasks or alike.
        add: (cleanup: Function) =>
            (dumpster.current = [...dumpster.current, cleanup]),

        // The exec() handle will invoke all cleanup functions one after another
        // until the array has been completely looped through. Once that's
        // happened the dumpster array will be set to an empty one.
        exec: () => {
            dumpster.current.forEach((cleanup) => cleanup());
            dumpster.current = [];
        },
    };
};

export default useClean;
