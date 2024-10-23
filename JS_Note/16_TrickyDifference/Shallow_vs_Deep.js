/*
    When you create a shallow copy of an array in JavaScript 
    that contains primitive values (like numbers, strings, or booleans), 
    modifications to the copied array will not affect the original array.

Key Points:
    Primitive Values: Primitive values are copied by value. This means that when you create a shallow copy and the elements are primitives, each element in the copied array is a separate instance. Changes to one won't affect the other.

Shallow Copy Behavior: A shallow copy creates a new array that references the same primitive values as the original array. However, since primitives are immutable, you can think of them as if they were deeply copied because you can modify the new array without affecting the original.
*/