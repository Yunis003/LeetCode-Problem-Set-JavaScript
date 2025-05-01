/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let i = init;
    return {
        increment: function increment(){
            return ++i
        },
        reset: function reset(){
            return i = init;
        },
        decrement: function decrement(){
            return --i;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
