/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanInts = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let outputInt = 0;
    const romanArray = s.split("");
    romanArray.forEach((element)=>{
        if (romanInts[element]){
            outputInt += romanInts[element];
        }
    })
    return outputInt;
};
