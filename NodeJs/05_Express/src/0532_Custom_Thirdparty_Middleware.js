/**
 * When you called res.json() or res.send()
 * req-res cycle will be stopped but code execution will continue within same function
 * 
 * console after res.json() will execute
 * 
 * but.......
 * 
 * next middleware will not execute
 * 
 */

const express = require('express');
const fs = require('fs');
// third party middleware
const morgan = require('morgan');


const app = express();
const movies = JSON.parse(fs.readFileSync(`${__dirname}/data/movies.json`));

// custom middleware
const logger = (req, res, next) => {
    console.log('hello from middleware');
    next();         // make sure to call next() otherwise request will not move to next middleware
}

/**
 * above case 
 *  // hello from middleware
 *  // hello from getMovie
 * 
 * next() first and then console.log
 *  // hello from getMovie
 *  // hello from middleware
 * 
 */

// middleware
app.use(express.json());
app.use(morgan('dev'));
// app.use(logger);

// custom middleware
app.use((req, res, next) => {
    req.requestAtTime = new Date().toISOString();
    next();
});

const PORT = 3000;
app.listen(PORT,() => {
    console.log('server has started...');
});

const allMovies = (req, res) => {
    res.status(200).json({
        status:  'success',
        data: {
            movies
        }
    });
};

const getMovie = (req, res) => {
    const { id } = req.params;
    const movie = movies.find(ele =>  ele.id === parseInt(id));

    if(!movie) {
        return res.status(404).json({
            status:  'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status:  'success',
        requestTime: req.requestAtTime,
        data: {
            movie
        }
    });
    console.log('hello from getMovie');         // this will execute even after res.json()
};

app.get('/api/v1/movies/:id/:director?',getMovie); 
app.use(logger);                  

/**
 * since re.send() is called logger middleware is not called.
 * 
 */
app.get('/api/v1/movies',allMovies);