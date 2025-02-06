console.log(chunk(['a', 'b', 'c', 'd'])); // => [['a'], ['b'], ['c'], ['d']]
console.log(chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3)); // => [[1, 2, 3], [4]]

function chunk(arr, size = 1){
    let ans = [];
    
    for(let i=0; i<arr.length; i=i+size){
        let j = 0;
        let chunkArray = [];
        while(j < size){
            if(arr[i + j]) {
             chunkArray.push(arr[i + j]);
            }
            ++j;
        }
        ans.push(chunkArray);
    }
    return ans;
}

// real solution

function chunk(arr, size = 1){
  let ans = [];
  
  for(let i=0; i<arr.length; i=i+size){
    ans.push(arr.slice(i, i + size));
  }
  return ans;
}

/**
 * What is presigned url ?
 * How to serve presignedUrl to 10 different customer if url is same it will cost us for reading from s3?
 * What is solution of above? => cdn
 * How to deploy schema db change and what is orm, migration?
 * What is serverless deployment strategies? => https://www.serverless.com/
 * React suspense and optimization technique?
 * What is migration and sharding in db?
 * 
 */