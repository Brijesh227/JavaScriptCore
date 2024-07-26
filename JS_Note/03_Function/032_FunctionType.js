/* 
    factory vs construcor function: https://www.youtube.com/watch?v=fbuyliXlDGI&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=5
    this with arrow: https://www.youtube.com/watch?v=ajTvmGxWQF8&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=7

    For data privacy use factory function, no one can change name.
        eg.,    function createPerson(name) {
                    return {
                        talk: function() {
                            console.log(`Hi, I am ${name}`);
                        }
                    }
                }
                const me = createPerson("ji");
                me.name = "notji";             // not allowed because me doesn't have name property.

    Use constructor function if you want to use inheritance. 
        Constructor function === class (both has same fundamentals - prototypal Inheritance)

    // Annonymous function -  generally used as function expression
    funcion(){
        console.log("talking");
    }

    // callback function
    setTimeout(function() {
        console.log("talking");
    }, 1000);

    // Named function
        - factory function
        - constructor function

    // Object methods
        const me = {
            sayHello: function() {}
        } 
    
    // Arrow function
        setTimeout(() => {
            console.log("talking");
        }, 1000);
*/

// code duplication
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

// ------ Factory Function -------

/*
    This actually create copy and assign to evevry object.
    so if we need to change function definition we actually need to change in every instances.
    we didn't use inheritance hierarchy.

    Mainly used for data privacy.
*/
function createPerson(name) {
    return {
        name: name,
        talk: function() {
            console.log(`Hi, I am ${name}`); //OR console.log(`Hi, I am ${this.name}`);
        }
    }
}

const me2 = createPerson("ji");
const me3 = createPerson("bir");
console.log(me2.name);              // ji
console.log(me3.name);              // bir
me2.talk();                         // Hi, I am ji
me3.talk();                         // Hi, I am bir

/*
    why need this, we directly create object instead
    const me2 = {
        name: "ji",
        talk: function() {
            console.log(`Hi, I am ${name}`);
        }
    }
    me2.name = "notji"
    me2.talk()  // Hi, I am notji(we expose name to outside)
*/


// ------ Constructor Function --------  (class has same fundamental applies to constructor function)

/*
    Person become actual type,
    It actually uses inheritance property.
    eg.,
        Person.prototype.speak = function() {
            console.log(`Hi, I am ${this.name}`);
        }
        this actually attach all object that we create from new Person();
*/
function Person(name) { 
    this.name = name;
    console.log(this);                  // Person { name: "ji", talk: f, talkWithThis : f, __proto__: Object }
    this.talk = function() {
        console.log("talking", name);
    };
    this.talkWithThis = function() {
        console.log("talking this", this.name);
    };
}
const pme = new Person("ji");
console.log(pme);                       /*  Person: {
                                                name: "ji",
                                                talk: f(),
                                                talkWithThis : f(),
                                                __proto__ : Object{...}
                                        } */
console.log(pme.talk());                // talking ji
console.log(pme.talkWithThis());        // talking this ji
console.log(Person.prototype);          /* {    
                                                constructor: f,
                                                __proto__ : Object{...}
                                         } */
console.log(Person.prototype.name);     // undefined 
console.log(Person.prototype.talk());   // TypeError: Person.prototype.talk is not a function
console.log(pme.prototype)              // undefined
console.log(Person.prototype === me.__proto_);  // true

/*  
    where this refer in factory fucntion:
        In a method defined within an object, this refers to the object that owns the method. When you create an instance of Person with new, this within the constructor function and the methods of the instance refers to the new instance being created, not the window object.
    
    What "new" keyword does internally when new Person("hi"):
        1.A new object is created: {}.
        2.The prototype of this new object is set to Person.prototype.
        3.The Person function is called with this referring to the new object and name set to "hi". Inside Person, this.name = name assigns "hi" to the name property of the new object.
        4.The new object { name: "hi", talk: function, talkWithThis: function } is returned.
        5.So, the new keyword ensures that the this keyword within the constructor function refers to the new object being created, allowing you to initialize properties on that new object.
*/


// ------ Arrow Function ----------

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwoImplicitReturn = (num1, num2) =>  num1 + num2
const addTwoImplicitReturnWithBraces = (num1, num2) => ( num1 + num2 )        // mostly used in React
const addTwoImplicitReturnObject = (num1, num2) => ({username: "hitesh", age: num1 + num2 })

console.log(addTwo(3, 4));

/* Do not use arrow fuction in
     1. Constructor Function
        const Person = (n) => {
            this.name = n;
        }
        const me = new Person('sina')   // TypeError: Person is not a constructor
     2. Method in object

        const me = {
            talk: () => {
                console.log("talking");
            }
        }
        // above is fine 

        const obj = {
            name: "ji",
            hello: function() {
                console.log(this);      // {name: "ji", hello: ƒ} 
            },
            arrHello: () => {
                console.log(this);      // Window
            }
        }
        // but when you want to access this it's problematic

     3. Constructor in class and prototype method
        const Person = () => {

        }
        const me = new Person()     // TypeError: Person is not a constructor
        
        --- and -----

        function Person (n) {
            this.n = n;
        }
        const me = new Person("ji")
        Person.prototy.talk = () => {
            console.log(this);        // Window
        }
    
    4. Event handlers
*/