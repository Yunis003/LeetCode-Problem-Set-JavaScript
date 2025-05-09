/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) { 
    
    function helperFunc(obj){
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;
        if (Array.isArray(obj)){
            const resArr = [];
            for (let i = 0; i < obj.length; i++){
                const curr = obj[i];
                const subArr = helperFunc(curr)
                if (subArr){
                    resArr.push(subArr);
                }
            }
            return resArr;
        }

        const resObj = {};
        for (const key in obj){
            const subRes = helperFunc(obj[key]);
            if(subRes){
                resObj[key] = subRes;
            }
        }
        return resObj;
    }
    return helperFunc(obj);
};
