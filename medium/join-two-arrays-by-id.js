/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // let resObj ={}
    // let preres = Object.assign(resObj, [arr1, arr2]);
    // let res = Object.values(preres);
    // return res
    const mergeArr = arr1.concat(arr2);
    const mergeObj = {};
    mergeArr.forEach((element)=>{
        let id = element.id;
        if(!mergeObj[id]){
            mergeObj[id] = {...element};
        }else{
            mergeObj[id] = {...mergeObj[id], ...element}
        }
    })
    return Object.values(mergeObj);
};
