/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let resultArr = [];
    for (let i = 0, length = arr.length; i < length; i++){
        resultArr.push(fn(arr[i], i));
        
    }
    return resultArr;
};
