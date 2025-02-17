// sort in descending order without change item1.age - item2.age
const arr = [
  {
  name: "Raj",
  age: 23,
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
  ]
  
  const sortedArr = arr.sort((item1, item2) => {
    if(item1.age - item2.age < 0){
        return -1;
      }
  }
  );
  console.log("arr",arr);
  console.log("sortedArr",sortedArr);