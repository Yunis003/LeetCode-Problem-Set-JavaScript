/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) { 
    function helperFunc(obj){
        if (!obj) return false;
        if (typeof obj !== 'object') return obj;

        if(Array.isArray(obj)){
            const resArr = [];
            let element;
            let subArr;
            for (let i = 0; i < obj.length; i++){
                element = obj[i];
                subArr = helperFunc(element);
                if(subArr){
                    resArr.push(subArr);
                }
            }
            return resArr;
        }

        const resObj = {};
        let subRes;
        for (const key in obj){
            subRes = helperFunc(obj[key]);
            if(subRes){
                resObj[key] = subRes;
            }
        }
        return resObj;
    }
    return helperFunc(obj);
};
