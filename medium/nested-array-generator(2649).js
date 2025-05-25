/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    let resArray = []
    for (let i = 0, length = arr.length; i < length; i++){
        if (Array.isArray(arr[i])){
            for (let j = 0, length = arr[i].length; j < length; j++){
                resArray.push(arr[i][j])
            }
        }
        resArray.push(arr[i]);
    }
    yield resArray
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
