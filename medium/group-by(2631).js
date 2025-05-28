/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {};
    
    for (let i = 0, length = this.length; i < length; i++){
        let key = fn(this[i]);
        if (!obj[key]){
            obj[key] = [this[i]]
        }
        else{obj[key].push(this[i])}
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
