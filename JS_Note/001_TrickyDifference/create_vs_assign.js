Object.assign(target, ...sources); // shallow copy

/**
 * -> Object.assign() is used to copy the values of all enumerable properties from one or more source objects to a target object.
 * -> shallow copy, meaning that nested objects are still references.
 * 
 * use:
 *      Copying properties(Creating a clone):
 *          -> shallow clone of an object
 *          -> Object.assign() when you want to copy the properties from one object to another.
 *      Merging multiple objects:
 *          -> merge multiple source objects into one target object.
 */

Object.create(proto, propertiesObject);

/* 
    -> Object.create() creates a new object, with the specified prototype object and optional properties(of type Object.defineProperties). 
    -> It doesn't directly copy any properties, it only sets up the prototype chain(inherit property).

    use:
        Object creation without copying: 
            -> Use it when you need a fresh object based on an existing prototype, without copying properties from the prototype.

        Prototypal inheritance::
            -> Create an object that inherits properties or methods from another object

    // Object.defineProperties()
    const object1 = {};
    Object.defineProperties(object1, {
        property1: {
          value: 42,
          writable: true,
        },
        property2: {},
    });
    console.log(object1.property1);
*/ 