/**
 * In strict mode, this is undefined in the global context or in functions that are called without an object context. This helps avoid unintentional global variable creation and makes it clearer when this is not explicitly bound.
    In non-strict mode, this defaults to the global object when not otherwise specified.
    Arrow functions do not have their own this in both strict and non-strict modes; they capture this from their lexical context.
 * 
 */