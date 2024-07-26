// see example on line 45

/*
1.for...of 
    Usage: Best for iterating over values of an iterable object.
    Note: Cannot be used with objects directly; works on iterable collections.

The for..of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, etc.
*/

let array = [1, 2, 3];

for (let element of array) {
    console.log(element);
}

/*
2.for..in
    Usage: Best for iterating over keys of an object.
    Note: Not recommended for use with arrays because it can iterate over prototype properties as well.

The for..in loop iterates over all enumerable properties of an object, including those inherited from its prototype chain.
*/

let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
    console.log(key + ": " + object[key]);
}

/*
3.forEach 
    Usage: Best for iterating over elements of an array.
    Note: Cannot break out of the loop early (like for and for..of with break).

The forEach method is available on arrays and is used to execute a provided function once for each array element.
*/

let arr = [1, 2, 3];

arr.forEach(function(element) {
    console.log(element);
});

arr.forEach(function(element) {
    if (element === 2) {
        return; 
    }
    console.log(element);         // 1 3
});
