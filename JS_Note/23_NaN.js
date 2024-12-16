console.log(typeof NaN);    // "number"
console.log(NaN === NaN);   // false (NaN is not equal to anything, including itself.)
console.log(NaN == NaN);    // false
console.log(isNaN(NaN));    // true (isNaN checks if a value is NaN)
console.log(isNaN(true));   // false
console.log(isNaN(false));  // false (because false is coerced to 0)

console.log(isNaN('foo'));          // true  -> The global isNaN() function performs type coercion before checking if the value is NaN. This means it first tries to convert the argument to a number        
console.log(Number.isNaN('foo'));  // false  -> The Number.isNaN() method, on the other hand, does not perform type coercion

console.log(parseInt('a123') == Number("123z"));        // NaN == NaN  -> false
console.log(typeof "10"/5)                              // NaN
console.log(typeof ("10"/5))                            // number
console.log(typeof NaN)                                 // number
console.log(typeof "10"/5 + typeof NaN);                // NaNnumber
console.log(isNaN(("10"/5)));                           // false
console.log(typeof (50 + +"100px") === "number");       // +"100px"(unary) = NaN => 50 + NaN = NaN => typeof(NaN) = number => number === number => true