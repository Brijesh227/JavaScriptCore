// https://www.youtube.com/watch?v=pN-Qmv4zBcI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=42

/*
OOPs in js contains:
    Constructor function
    Prototypes
    Classes
    Instances (new, this)

4 Pillars of JS:
    1.Abstraction
    2.Encapsulation
    3.Inheritance
    4.Polymorphism
    - Abstraction: hiding the internal details and showing only the necessary methods to the user.(fetch api)
    - Encapsulation: binding the data and methods together and only show data you want to expose to user(wrapper).
    - Inheritance: reusing the code from parent class.
    - Polymorphism: same method name but different implementation.
*/

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${username}`);           // ReferenceError: username is not defined
        console.log(`Username: ${this.username}`);      // Username: hitesh
        console.log(this);                              // {username: "hitesh", loginCount: 8, signedIn: true, getUserDetails: ƒ}
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn){
    // const this = {};             internallu does this when new is called
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this;                  internally does this when new is called
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);       // [Function: User]
//console.log(userTwo);