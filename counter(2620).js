/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentNum = n - 1;
    return function() {
       currentNum += 1;
       return currentNum;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
