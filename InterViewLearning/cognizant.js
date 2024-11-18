//what is ecmascript in javascript

// difference between node 14, 18 and 20

// find bug in this

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.concat(flattenArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
   
  // Example usage:
  const nestedArray = [1, [2, [3, 4], 5], 6];
  const result = flattenArray(nestedArray);
  console.log(result);

// write typescript class for this:

const lruCache = new LRUCache(2);
lruCache.put(1, 1); // cache is {1=1}
lruCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4