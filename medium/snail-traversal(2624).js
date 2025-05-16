/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    let resArr = new Array();
    
    for (let i = 0, length = rowsCount; i < length; i++){
        let cols = new Array();
        for(let j = 0, length = colsCount; j < rowsCount; j++){
            cols.push(this[j]);
        }
        resArr.push(cols)
    }
    return resArr
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
