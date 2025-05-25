/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0, length = arr.length; i < length; i++){
        if (Boolean(fn(arr[i], i))) filteredArr.push(arr[i]);
    }
    return filteredArr;
    
};
