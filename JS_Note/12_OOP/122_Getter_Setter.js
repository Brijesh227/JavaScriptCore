// https://www.youtube.com/watch?v=t6vLhF-iSxQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=48

/**
 *  Every class has getters and setters.
 *      -> Automatically getter and setter creted as method for every property.
 *          class Uset {
 *              constructor(name){
 *                  this.name = name;
 *              }
 *          }
 *          in above code getter and setter as name() method created by default
 *      
 *      e.g.,
 *      -> length of array internally used get and set
 */

class User {
    constructor(name) {
        this.name = name;
    }
    // You can not create only getters(same name as a property) of property, it must contain setter also.
    get name() {
        return this.name;
    }
}
const user = new User("me");
console.log(user.name);             // RangeError: Maximum call stack size exceeded

class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
    set name(val){
        this.name = val;            
    }
}
const user2 = new User("me");
console.log(user2.name);            // RangeError: Maximum call stack size exceeded

class User {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(val){
        this._name = val;            
    }
}
const user3 = new User("me");
console.log(user3.name);        // me


// you can create only getter if name is not in default propery(like rating is not in constructor)
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.numReviews = 0;
        this.totalScore = 0;
    }
    get rating(){
        return this.totalScore / this.numReviews;
    }
    review(score){
        this.numReviews++;
        this.totalScore = this.totalScore + score;
    }
}
  
const book1 = new Book("Title", "Author");
book1.review(4);
book1.review(2);
console.log(book1.rating);      // 3