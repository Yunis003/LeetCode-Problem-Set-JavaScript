/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    const arr = this;
    const res = new Array(rowsCount).fill(0).map(()=> new Array(colsCount).fill(0));
    let reversed= false;

    let row;
    let col;
    for (let i = 0, length = this.length; i < length; i++){
        row = !reversed ? i % rowsCount : rowsCount - 1 - (i % rowsCount);
        col = Math.floor(i / rowsCount);

        res[row][col] = arr[i];

        if (i % rowsCount === rowsCount - 1) reversed = !reversed;
    }
    // for (let i = 0, length = rowsCount; i < length; i++){
    //     for(let j = 0, length = colsCount; j < length; j++){
    //         res.push(this[j]);
    //     }
    //     arr.push(res)
    // }
    // return arr;
    return res
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
