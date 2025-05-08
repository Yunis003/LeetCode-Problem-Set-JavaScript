/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    const resObj = Object.values(obj);
 
    resObj.forEach((element)=>{
        const result = []
        if(Boolean(element)){
            if(Array.isArray(obj)){
                result.push(element);
            }
        }
        return result;
    })

    resObj.forEach((element, key)=>{
        const result2 = {};
        if(Boolean(element)){
            if(typeof obj === 'object'){
                result2[key] = element
            }
        }
        return result2
    })
    }

};
