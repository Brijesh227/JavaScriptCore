/**
 * Sort will mutate array in-place.
 * 
 * Sort will convert all element into strings,then comparing their sequences of UTF-16 code unit values.
 * 
 * Use toSorted() method to do not change current array.
 * 
 * 
 * sort(a,b) => return 1 -> swap a after b      [b,a]
 *              return -1 -> swap b before a    [a,b]
 *              return 0 -> as it is            [a,b]
 * 
 * sort works fine for array of strings but but but
 * for array of object you have to manually handle case by .localeCompare()
 * 
 */

const stringArr = ["Blue", "Humpback", "Beluga","AV","AA","AB","br"];
stringArr.sort();

console.log(stringArr)  //  [ 'AA', 'AB', 'AV', 'Beluga', 'Blue', 'Humpback', 'br' ]

const numberArray = [40, 1, 5, 200];
numberArray.sort();

console.log(numberArray)    // [1, 200, 40, 5]  because treat as string

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]

const arr = [
    {
      name: "Raj",
      age: 20,
      dob: "2024-02-17"
    },
    {
      name: "Abj",
      age: 33,
      dob: "2024-02-17"
    },
    {
      name: "Kai",
      age: 25,
      dob: "2023-02-06"
    },
    {
      name: "Men",
      age: 30,
      dob: "2025-02-17"
    }
];
console.log("before arr",arr);

// sort by age (number)
arr.sort((item1, item2) => {
    if(item1.age - item2.age < 0) {
        return 1;                         // use -1 for ascending
    } else if(item1.age - item2.age > 0){
        return -1;                        // use 1 for ascending
    } else {
        return 0;
    }
});

// sort by name (string)
//arr.sort((a, b) => a.name - b.name); // ❌ NaN because strings cannot be subtracted

arr.sort((a, b) => a.name.localeCompare(b.name)); // ✅ Works properly

console.log("after arr",arr);