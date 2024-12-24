// Date.now() and new Date().getTime()  => the current timestamp in milliseconds since the Unix epoch (1970-01-01 00:00:00 UTC).

Date.now()
    // => static method
    // => the most efficient


new Date().getTime()
    // new Date object representing the current time and then calls the .getTime() method on it