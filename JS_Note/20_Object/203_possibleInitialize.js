//1. Using Object Literals -> The simplest and most common way to create an object is by using an object literal.


let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

//2. Using the new Object() Syntax -> You can create an object using the new Object() constructor.


let person3 = new Object();
person.name = 'John';
person.age = 30;
person.greet = function() {
  console.log('Hello, ' + this.name);
};

//3. Using a Constructor Function -> You can create an object by defining a constructor function. This approach is commonly used when creating multiple instances of the same type of object.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}

let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);

//4. Using Object.create() -> The Object.create() method creates a new object with the specified prototype object.

let person = Object.create(null);
person.name = 'John';
person.age = 30;
person.greet = function() {
  console.log('Hello, ' + this.name);
};

//You can also use Object.create() with an existing object as the prototype.

let animal = {
  type: 'Animal',
  speak: function() {
    console.log('Hello!');
  }
};

let dog = Object.create(animal);
dog.name = 'Fido';
dog.bark = function() {
  console.log('Woof!',name);        // undefined
  console.log('Woof!',this.name);   // Woof! Fido
};

// 5. Using Object.assign() -> Object.assign() can be used to create a new object by copying the properties of one or more existing objects.

let person = Object.assign({}, { name: 'John', age: 30 });
person.greet = function() {
  console.log('Hello, ' + this.name);
};

// 6. Using the class Syntax (ES6+) -> In modern JavaScript (ES6 and later), you can create objects using classes, which is syntactic sugar over the constructor function approach.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log('Hello, ' + this.name);
  }
}

let person = new Person('John', 30);

//7. Using a Factory Function -> A factory function is a function that returns a new object each time it's called.

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
}

let person = createPerson('John', 30);