/**
 *  You CANNOT implement multiple abstract classes in TypeScript
    TypeScript (and JavaScript) only support single inheritance
        abstract class Animal {
            abstract makeSound(): void;
        }

        abstract class Vehicle {
            abstract move(): void;
        }

        class Robot extends Animal, Vehicle {} // Error: Classes can only extend a single class


    Abstract class implementing multiple interfaces
    
        interface Eatable {
            eat(): void;
        }

        interface Sleepable {
            sleep(): void;
        }

        abstract class Mammal implements Eatable, Sleepable {
            abstract makeSound(): void;

            eat() {
                console.log("Eating food");
            }

            sleep() {
                console.log("Sleeping");
            }
        }
 */

class TakePhoto {
    photo: string
}

const obj = new TakePhoto();


abstract class Photo {
    photo: string
    abstract getSepia(): void
    getReelTime() : number {
        return 7;
    }
}

// const obj2 = new Photo()         // we can't do this(Invalid)

class Instrgram extends Photo {
    getSepia(){
        console.log('hello from instagram')
    }

    // you can override getReelTime here 
}

const obj2 = new Instrgram()        // valid
