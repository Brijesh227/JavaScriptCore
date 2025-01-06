/**
 *  Basic Types (number, string, boolean, symbol, bigint)
    Object Types (object, Array, Tuple, Function)
    Special Types (any, unknown, null, undefined, void, never
 * 
 */

// Basic Types
  // These are the fundamental types in TypeScript.

  // number: Represents all numbers, both integers and floating-point values.
  let x: number = 10;

  // string: Represents sequences of characters.
  let name: string = "John";

  // boolean: Represents a logical value, either true or false.
  let isActive: boolean = true;

  // symbol: Represents a unique and immutable value, often used as object property keys.
  const uniqueSymbol: symbol = Symbol();

  // bigint: Represents integers that are too large for the number type.
  let bigNumber: bigint = 12345678901234567890n;

// Object Types
  // These are used to represent non-primitive types, such as objects, arrays, and functions.
  
  // object: A non-primitive type that can represent any non-primitive value
  let obj: object = { name: "Alice", age: 25 };
  
  // Array: Represents a collection of elements of a specific type.
  let numbers: number[] = [1, 2, 3];
  let strings: Array<string> = ["apple", "banana"];
  
  // Tuple: An ordered collection of values where each element can have a different type.
  let tuple: [string, number] = ["Alice", 30];
  
  // Function: Represents a callable entity, like a function or method.
  let greet: (name: string) => string = (name) => `Hello, ${name}`;

// Special Types
  // These types represent special values or concepts in TypeScript.

  // any: A type that can represent any value
  let anything: any = "Hello";
  anything = 42;
  anything = true;

  // unknown: A safer alternative to any
  let unknownValue: unknown = "hello";
  if (typeof unknownValue === "string") {
      console.log(unknownValue.toUpperCase());
  }

  // null: Represents the absence of a value.
  let nothing: null = null;

  // undefined: Represents a variable that has not been assigned a value
  let uninitialized: undefined = undefined;

  // void: Represents the absence of a return value
  function logMessage(message: string): void {
      console.log(message);
  }

  // never: Represents values that never occur
  function throwError(message: string): never {
      throw new Error(message);
  }

// Union and Intersection Types
  let value: string | number = "hello";
  value = 42;

  interface Person {
      name: string;
      age: number;
  }
  interface Worker {
      job: string;
  }

  let employee: Person & Worker = {
      name: "Alice",
      age: 30,
      job: "Engineer"
  };

// Literal Types
  let direction: "up" | "down" = "up";
  let level: 1 | 2 | 3 = 2;
  let isActiveStatus: true = true;

// Type Aliases
  type Name = string;
  let myName: Name = "John";

// Interfaces
  interface PersonInterface {
      name: string;
      age: number;
  }

  let person2: PersonInterface = {
      name: "Alice",
      age: 25,
  };

// Enum Types
  enum Direction {
      Up,
      Down,
      Left,
      Right,
  }

  let move: Direction = Direction.Up;

  enum Status {
      Pending = "PENDING",
      Completed = "COMPLETED",
      Failed = "FAILED",
  }

// Mapped Types
  type ReadOnly<T> = {
      readonly [K in keyof T]: T[K];
  };

// Conditional Types
  type IsString<T> = T extends string ? "Yes" : "No";
  type Test1 = IsString<string>;
  type Test2 = IsString<number>;

// Class Types
class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

let myCar: Car = new Car("Toyota", "Camry");
