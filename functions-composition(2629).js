/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        functions.reverse().forEach((element)=>{
            if (element) x = element(x);
        })
        return x;

        // for (let i = functions.length; i > 0; i--){
        //     currentFunc = functions[i];
        //     if (currentFunc){
        //         result += currentFunc(x);
        //         x = currentFunc(x);
        //     }
           
        // }
        // console.log(result)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
