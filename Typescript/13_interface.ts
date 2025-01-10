/**
 * -> inteface reopen meaning we can redeclared same interface.
 *  e.g., suppose you integrated third-party library in your code and it has defined interface, you want 
 *          to add new field in that then reopening is good option
 *         
 * -> type is not re opened
 * 
 * one class have multiple interface
 * 
 *  Implementing multiple interfaces in a single class
        interface Flyable {
            fly(): void;
        }
        interface Swimmable {
            swim(): void;
        }
        class Duck implements Flyable, Swimmable {
            fly() {
                console.log("Duck is flying");
            }
            swim() {
                console.log("Duck is swimming");
            }
        }
    
    Interface extending an abstract class

    abstract class Shape {
        abstract getArea(): number;

        getPerimeter(): number {
            return 0; // Default implementation
        }
    }

    // Interface can extend a class (including abstract classes)
    interface Circle extends Shape {
        radius: number;
    }

    // Implementing the Circle interface
    class CircleImpl implements Circle {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

        getPerimeter(): number {
            return 2 * Math.PI * this.radius;
        }
    }
 */

// ---------- Reopening ---------------

// Thirdparty library code
interface User {
    name: string,
    mobile: number
    getCoupon(): string
    // getCoupon: () => string  // both valid
    googleId?: string
    getDiscount(code: string): string
}

// local code
interface User {
    githubId: string
}
// --------------------------------------


// you can extend also
interface Another {
    dum: string
}

interface Admin extends User, Another {
    role: "admin"
}
