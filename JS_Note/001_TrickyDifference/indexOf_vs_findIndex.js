/**
 * indexOf: Use it when you need to find the index of a specific value.
 * findIndex: Use it when you need to find the index of an element that meets certain criteria defined in a function.
 */


/* indexOf: Searches for a specific value and 
        If found, returns the first index
        else returns -1.

 Syntax: array.indexOf(searchElement[, fromIndex])

 searchElement: The value you want to search for in the array.
 fromIndex (optional): The index to start the search from. The default is 0.

 Use Case: Ideal for simple searches where you know the exact value you're looking for and want the index of that value.
*/
const array = [1, 2, 3, 4, 5];
const index = array.indexOf(3); // 2
const notFound = array.indexOf(6); // -1


/* findIndex:  Searches for an element on a test condition provided by a callback function 
             If passes the test, returns first index. 
             else returns -1.

 Syntax: array.findIndex(callback[, thisArg]) 
                    callback: function that tests each element.(current element, current index, array itself).
 Use Case: Ideal when you need to find an element based on more complex conditions or when you don't know the exact value you're looking for.
*/

const array2 = [1, 2, 3, 4, 5];
const index2 = array.findIndex(element => element > 3); // 3 (index of 4)
const notFound2 = array.findIndex(element => element > 6); // -1