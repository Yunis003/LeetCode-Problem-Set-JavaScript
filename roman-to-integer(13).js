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
    }
    let res = 0;

    for (let i = 0, length = s.length; i < length; i++){
        const currentRoman = s[i];
        const currentInteger = romanInts[s[i]];
        const nextRoman = s[i + 1];
        const nextInteger = romanInts[s[i + 1]];

        if (currentInteger < nextInteger){
            res -= currentInteger;
        }
    // MCMXCIV
    // LVIII
        else{
            res += currentInteger;
        }
    }
    return res;
};
