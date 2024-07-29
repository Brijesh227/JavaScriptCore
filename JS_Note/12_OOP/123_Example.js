/*
Define a Class called `Book` with `title`, `author`, `numReviews`, and `totalScore` properties. 
Create a method called `review` that accepts a number representing a review score. The `review` method must increment the `numReviews` property and add the review score to the `totalScore` property. 
Also, add a dynamic property called `rating` that calculates the average of the reviews (`totalScore` divided by `numReviews`).
*/

/* solution 1 not preferable because 
    Code Clarity: Initializing properties in the constructor can make the code easier to understand and maintain because it clearly outlines the expected state of an object when it's first created.

    Avoiding Errors: Defining properties in the constructor ensures that they are defined and have a default value (like null or 0), which can help avoid issues if code tries to access these properties before they are set elsewhere.
*/
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.numReviews = 0;
    this.totalScore = 0;
  }

  review(reviewScore) {
    this.numReviews++;
    this.totalScore += reviewScore;
    this.rating = this.totalScore / this.numReviews;
  }
}

class Book {
    title = "";
    author = "";
    numReviews = 0;
    totalScore = 0;
    rating = 0;
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    review(reviewScore) {
      this.numReviews++;
      this.totalScore += reviewScore;
      this.rating = this.totalScore / this.numReviews;
    }
  }

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
console.log(book1.rating);