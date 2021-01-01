/**
 * @author bolmaster2, jlmakes
 *
 * (https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886)
 */

// This function works on most browsers, therefore there might be some issues
// with older ones or completely different build ones.
const isTouchDevice = () => {
    return !!("ontouchstart" in window || navigator.maxTouchPoints);
};

export default isTouchDevice;
