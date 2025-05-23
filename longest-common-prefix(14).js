/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstPrefix = strs[0].slice(0,2);
    function checkPrefix(age){
        if (age.slice(0,2) == firstPrefix){
            return age.slice(0,2);
        }
    }
    if (strs.every(checkPrefix)){
        return firstPrefix;
    }
    return "";
};
