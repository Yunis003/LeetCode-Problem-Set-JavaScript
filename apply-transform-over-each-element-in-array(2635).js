/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    arr.map((element, index)=>{
        result.push(fn(element,index));
    })
    return result
};
