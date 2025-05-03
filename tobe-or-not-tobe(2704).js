/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let obj ={
        toBe: function(argument){
            if (argument === val){
                return true;
            }
            else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(argument){
            if (argument !== val){
                return true;
            }
            if(argument == val){
                throw new Error('Equal');
            }
            else {
                throw new Error('Not Equal');
            }
        }
    }
    return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
