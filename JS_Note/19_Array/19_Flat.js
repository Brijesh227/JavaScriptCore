const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

arr.flat(Infinity);

console.log(arr);   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// ----
const sensor = [1, 2, 3, [null, 5, [4, 10], 89, "20", , [[[[, "96"]]]]]];

function convert() {
    // ?? 
    const mapped = flattenArr.map((item) => item);
    console.log(mapped);
}