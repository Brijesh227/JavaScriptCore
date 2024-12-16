/**
 * Summary:
    In a browser environment, 
        window.onerror for synchronous errors and 
        unhandledrejection for unhandled promise rejections. 
    In Node.js, 
        process.on('uncaughtException') for uncaught errors.
 * 
 */

Error handling in JS:

    // 1. window.onerror: Global handler for synchronous errors in the browser.

    window.onerror = function (message, source, lineno, colno, error) {
      console.error(`Global Error: ${message} at ${source}:${lineno}:${colno}`);
      // Optionally, you could log the error to a server here
      return true;  // Prevents the default browser error handling
    };
    
    throw new Error("Something went wrong!");
      
    // 2.window.addEventListener('unhandledrejection'): Global handler for unhandled promise rejections in the browser.

    window.addEventListener('unhandledrejection', function (event) {
        console.error('Unhandled Promise Rejection:', event.reason);
      });
      
    new Promise((_, reject) => reject('Something went wrong!'));
      
    // 3.process.on('uncaughtException'): Global handler for uncaught exceptions in Node.js.


    4.window.addEventListener('error'): Alternative to window.onerror for global error handling in the browser with more flexibility.


