// implement map, forEach, filter using reduce method of array

// map using reduce - mysolution
function mapArray<T>(arr: Array<T>, callback: (val:T) => unknown): Array<T> {
    let res: Array<T> = [];
    const ans = arr.reduce((acc, curr) => {
        res.push(callback(curr) as T);
        return res;
    }, res);
    return ans;
}

// chatgpt solution
function mappedArray<T,U>(arr: Array<T>,callback:(val: T) => U): Array<U> {
    return arr.reduce((acc,curr) => {
        acc.push(callback(curr));
        return acc;
    }, [] as Array<U>)
}

// filter using reduce

function filterArray<T>(arr: Array<T>, callback:(val: T) => boolean): Array<T> {
    return arr.reduce((acc,curr) => {
        if(callback(curr)){
            acc.push(curr);
        }
        return acc;
    }, [] as Array<T>)
}

const a1: Array<number> = [1,2,3];
const mapAns = mapArray(a1,(ele: number): string => `${ele} 1`);
console.log(mapAns);

const mappedAns = mappedArray(a1,(val: number) => val);
console.log(mappedAns);

const filArr = filterArray(a1,(val) => val > 2);
console.log(filArr);
