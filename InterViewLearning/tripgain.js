// sort in descending order without change item1.age - item2.age
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
arr.sort((item1, item2) => {
    if(item1.age - item2.age < 0) {
        return 1;                         // use -1 for ascending
    } else if(item1.age - item2.age > 0){
        return -1;                        // use 1 for ascending
    } else {
        return 0;
    }
});
console.log("after arr",arr);