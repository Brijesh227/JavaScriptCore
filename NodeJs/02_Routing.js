/**
 * When request sent first time from browser it fetches html and internally made extra 
 * call to fetch required css and js file used in that html file and favicon file.
 * 
 * // File based URL
 * www.hello.com/about.html    
 * 
 * // Resource based URL
 * www.hello.com/About         
 * 
 * // Route Parameter
 * www.hello.com/Product/101   
 * 
 * // Query String
 * www.hello.com/Books?author=john&id=101  
 */

// Basic

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello server');
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Server has started');
})

// Route handling

const server2 = http.createServer((req, res) => {       // localhost:8000/home
    let path = req.url;
    res.end(path);                      // /home
    res.end('hello server');
});
