/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(cmpVal){
        if (val === cmpVal) return true;
        throw new Error("Not Equal");
    }
    function notToBe(cmpVal){
        if (val !== cmpVal) return true;
        throw new Error("Equal");
    }
    
    return {
        toBe: toBe,
        notToBe: notToBe
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
