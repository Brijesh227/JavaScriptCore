// http://localhost:8000/Products?id=101&name=iphone 

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let path = req.url;
    console.log(path);              //  /Products?id=101&name=iphone (with slash)
                                    //  /favicon.ico


    const parseUrl = url.parse(path, true); // true -> parse query string
    console.log(parseUrl.query);        // { id: '10', name: 'iphone' } 
    console.log(parseUrl.pathname);     // /Products            (resource)
    console.log(parseUrl.path);         // /Products?id=101&name=iphone
    console.log(parseUrl.href);         // /Products?id=101&name=iphone
    res.end('hello server');
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Server has started');
})