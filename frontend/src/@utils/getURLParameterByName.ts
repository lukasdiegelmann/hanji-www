/**
 * @author Stack Overflow Community Wiki
 *
 * (https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)
 */

const getParameterByName = (name: string, url: string) => {
    name = name.replace(/[[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return "";

    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

export default getParameterByName;
