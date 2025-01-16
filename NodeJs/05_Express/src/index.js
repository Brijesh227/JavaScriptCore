const express = require('express');
const app = express();

// create a server
const PORT = 5000;
app.listen(PORT,() => {
    console.log('server has started...');
})

// route = HTTP Method + URL
app.get('/',(req, res) => {
    res.status(200).send('Hello from express server');
    // res.status(200).send('<h4>Hello from express server</h4');
                    
                                // send -> by default Content-Type : 'text/html' (pass normal string or html)

    // for json
    res.status(200).json({message: 'Hello from express server'});
})