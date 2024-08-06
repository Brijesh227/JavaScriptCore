// const obj  = {
//     a: 'jack',
//     b: {
//         c: 'sparrow',
//         d: {
//            e: 'hahaha'
//         }
//     }
// };

// let resObj = {};
// function FlattenObject(obj,currKey){
//     for(let key of Object.keys(obj)){
//         let resKey;
//         if(currKey === undefined){
//             resKey = key;
//         } else {
//             resKey = currKey + '.' + key;
//         }
//         if(typeof obj[key] === 'object'){
//             FlattenObject(obj[key],resKey);
//         } else {
//             resObj[resKey] = obj[key];
//         }
//     }
// }

// FlattenObject(obj);
// console.log(resObj);

const obj = {
    'a': 'jack',
    'b.c': 'sparrow',
    'b.d.e': 'hahaha'
};

function constructObject(obj) {
    let resObj = {};
    for(let currKey in obj) {        
        let key = currKey.split(".");
        let lastkey = key[key.length-1];
        let branch = key.splice(0,key.length-1);

        if(branch.length > 0){
            console.log(currKey,branch,lastkey);
            for(let i=branch.length-1;i>=0;--i){
                if(i == branch.length-1) {
                    resObj[branch[i]] = {
                        [lastkey] : obj[currKey]  
                    };
                } else {            
                    resObj[branch[i]] = {
                        ...resObj[branch[i]],
                        [branch[i+1]] : resObj[branch[i+1]] 
                    };
                    delete resObj[branch[branch.length-1]];
                }
            }
        } else {
            resObj[lastkey] = obj[lastkey]; 
        }
    }
    console.log("obj",resObj);
}

constructObject(obj);

// Flatten the Array.

const arr = [[[1],1,2],[2,3],3];
const inbuildFlat = arr.flat();
console.log(inbuildFlat);       // [[1],1,2,2,3,3]

// second way - Recursion
const res= [];
function flatArr(arr){
    for (let i=0;i<arr.length;++i){
        if(!Array.isArray(arr[i])){
            res.push(arr[i]);
        } else {
            flatArr(arr[i]);
        }
    }
    return res;
}

console.log('flaten Arr',flatArr(arr));    //[1,1,2,2,3,3]