/*
    Everything in js is Object (Prototyple inheritance)
    How?
        const arr= [];
        console.log(arr)        // arr: 
                                    __proto__ : Array {
                                        it inherit all methods and properties from Array prototype has.
                                        like push, pop, map, filter, reduce, etc.
                                        __proto__ : Object { ... }
                                    }

    Prototype property does not belongs to variable or instance or object it only belongs to Class and Constructor function.
*/


const obj1 = {
    talk(){
        console.log("talking");
    }
}

const obj2 = {
    talk(){
        console.log("talking");
    }
}

// above is bad idea.


// ----- Class based Inheritance ------

class Person {
    talk(){
        console.log("talking");
    }
}

const me2 = new Person();
me2.talk();                  // talking

console.log(me2)            /* Person { 
                                __proto__: {
                                    constructor: class Person, 
                                    talk: f talk(),
                                    __proto__: Object
                                } 
                            } */
console.log(Person.prototype)   /* { 
                                    constuctor: class Person, 
                                    talk: f, 
                                    __proto__ : Object
                                } 
                                */

Person.prototype === me2.__proto__    // true


// ------ Function based Inheritance -------

// bad practice coz talk directly assign to Person not to Person.prototype
function Person() {                 
    this.talk = function(){
        console.log("talking");
    }
}
const pme = new Person();
console.log(pme)    /* Person { 
                        talk: f(), 
                        __proto__: { 
                            constuctor: f Person(),
                            __proto__: Object
                        }
                    } */
console.log(pme.talk())                 // talking
console.log(Person.prototype.talk())    // undefined
console.log(Person.talk())              // undefined

// good practice
function Person(){}
Person.prototype.talk = function(){     
    console.log("talking");
}
const fme = new Person();
me.talk();

console.log(fme) // Person { 
                 //       __proto__: {
                 //           talk: f(),
                 //           constuctor: f Person(),
                 //       }
                 //   }

// Ideal Solution
function Person(age,name){
    this.age = age;             // properties -> what i have?
    this.name = name;
}
Person.prototype.talk = function(){     // methods -> what can i do?
    console.log("talking");
}
Person.prototype.walk = function(){
    console.log("name");
}


// ------- Inheritance using pure objects with Object.create ------
const personCreate = {
  talk() {
    return 'Talking';
  }
}
const meCreate = Object.create(personCreate);
meCreate.talk(); // Talking
  
  
// ------- Inheritance using pure objects with Object.setPrototypeOf -----
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking


// __proto__ vs prototype

const hello = {};
console.log(hello);   // { __proto__: Object }   
    /*
        hello: { __proto__: Object }  ------> Object.prototype = {
                                                __defineGetter__: f,
                                                __defineSetter__: f,
                                                __lookupGetter__: f,
                                                __lookupSetter__: f,
                                                constructor: f,
                                                hasOwnProperty: f,
                                                isPrototypeOf: f,
                                                propertyIsEnumerable: f,
                                                toLocaleString: f,
                                                toString: f,
                                                valueOf: f
                                            }
    */