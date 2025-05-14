/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const resArr = [];
    if (n === 0) return arr;
    arr.forEach((element)=>{
        if(Array.isArray(element)){
            resArr.push(...flat(element, n - 1));
        }
        else{
            resArr.push(element);
        }
    })
    return resArr;
};
