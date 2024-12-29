/**
 *  uncaughtException: triggered when a synchronous exception (error) is thrown but is not caught by a try...catch block.
        Syntax:
          process.on('uncaughtException', (error) => {
              console.error('Critical error:', error);
              // Perform cleanup
              process.exit(1); // Exit to prevent unstable state
          });


    unhandledRejection: triggered when a Promise is rejected, but no .catch() handler or equivalent try...catch for async/await is attached to handle the rejection.
        Syntax:
          process.on('unhandledRejection', (reason, promise) => {
              console.error('Unhandled Rejection at:', promise, 'reason:', reason);
          });
 * 
 * 
 * Summary:
    In a browser environment, 
      window.onerror for synchronous errors and 
      unhandledrejection for unhandled promise rejections. 
    In Node.js, 
      process.on('uncaughtException') for uncaught errors.

    // Traditional:
        const error = new Error("This is the error message");
        console.log(error.message); // "This is the error message"
        console.log(error.name);    // "Error"

        //OR

        class ValidationError extends Error {
          constructor(message) {
            super(message);                 // Pass the message to the parent Error class.
            this.name = "ValidationError";  // Customize the error name.
          }
        }


    // The cause Property (Introduced in ECMAScript 2022)
        -> to provide additional context about the error.

          Syntax: 
          const error = new Error("Something went wrong", {
                                  cause: new Error("Underlying issue"),
                                });
          console.log(error.message); // "Something went wrong"
          console.log(error.cause);   // Error: Underlying issue
 * 
 */

// Error handling in JS:
//  1. try...catch Blocks (async/await, promise.catch())
//  2. Error Event Listeners
//      Browser -> window.onerror, window.addEventListener
//        1. window.onerror: Global handler for synchronous errors in the browser.

            window.onerror = function (message, source, lineno, colno, error) {
              console.error(`Global Error: ${message} at ${source}:${lineno}:${colno}`);
              // Optionally, you could log the error to a server here
              return true;  // Prevents the default browser error handling
            };
            throw new Error("Something went wrong!");

//        2. window.addEventListener('unhandledrejection'): Global handler for unhandled promise rejections in the browser.

            window.addEventListener('unhandledrejection', function (event) {
              console.error('Unhandled Promise Rejection:', event.reason);
            });

            new Promise((_, reject) => reject('Something went wrong!'));
      
//      Node -> process.on('uncaughtException')

        process.on('uncaughtException', (error) => {
            console.error("Uncaught Exception:", error.message);
            process.exit(1); // Exit the process safely
        });

        process.on('unhandledRejection', (reason) => {
            console.error("Unhandled Rejection:", reason.message);
        });


