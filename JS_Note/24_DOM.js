querySelectorAll(): 
    -> select multiple elements from the DOM (Document Object Model) that match a specified CSS selector.
    -> It returns a static NodeList (a collection of nodes) containing all matching elements.

querySelector():
    -> returns only the first matching element

createElement(): 
    -> A method in JavaScript used to create a new HTML element (node) of a specified type. 
    -> It is commonly used when you want to dynamically create a new element, such as a div, span, button, etc.
Syntax:
    var newElement = document.createElement(tagName);

    e.g.,
        var newDiv = document.createElement('div');
        newDiv.textContent = "Hello, World!";
        document.body.appendChild(newDiv);