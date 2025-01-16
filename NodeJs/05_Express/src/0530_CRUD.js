const express = require('express');
const fs = require('fs');

const app = express();
const movies = JSON.parse(fs.readFileSync(`${__dirname}/data/movies.json`));

// middleware
app.use(express.json());    // to parse the body of request (add body to request) we can access body of request after adding this middleware

// create a server
const PORT = 3000;
app.listen(PORT,() => {
    console.log('server has started...');
});

// route = HTTP Method + URL
// get all movies
app.get('/api/v1/movies',(req, res) => {
    res.status(200).json({
        status:  'success',
        data: {
            movies
        }
    });
});

// post create a new movie
app.post('/api/v1/movies',(req, res) => {
    console.log(req.body);              // undefined because body is not directly attached with request

    const newMovie = Object.assign({id: movies.length + 1}, req.body);
    movies.push(newMovie);
    fs.writeFile(`${__dirname}/data/movies.json`, JSON.stringify(movies), (err) => {
        res.status(201).json({
            status:  'success',
            data: {
                movie: newMovie
            }
        });
    });
});

// get specific movie
app.get('/api/v1/movies/:id/:director?',(req, res) => {         // ? means optional
    const { id } = req.params;
    const movie = movies.find(ele =>  ele.id === parseInt(id));     // everyparam variable is string

    if(!movie) {
        return res.status(404).json({
            status:  'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status:  'success',
        data: {
            movie
        }
    });
});

// update a movie
app.patch('/api/v1/movies/:id',(req, res) => {
    const updateMovie = req.body;
    const { id } = req.params;
    const movie = movies.find(ele => ele.id === id * 1);
    const indexToUpdate = movies.indexOf(movie);

    const updateMovieObject = Object.assign(movie, updateMovie);
    movies[indexToUpdate] = updateMovieObject;
    
    // for(let key of Object.keys(updateMovie)){
    //     movie[key] = updateMovie[key];
    // }

    // movie
    if(!movie) {
        return res.status(404).json({
            status:  'fail',
            message: 'Invalid ID'
        });
    }
    fs.writeFile(`${__dirname}/data/movies.json`, JSON.stringify(movies), (err) => {
        res.status(201).json({
            status:  'success',
            data: {
                movie
            }
        });
    });
});

app.delete('/api/v1/movies/:id',(req, res) => {
    const { id } = req.params;

    // my solution
    // const filterMovie = movies.filter(ele =>  ele.id !== parseInt(id));

    // video solution
    const movie = movies.find(ele => ele.id === id * 1);

    if(!movie) {
        return res.status(404).json({
            status:  'fail',
            message: 'Invalid ID'
        });
    }

    const indexToDelete = movies.indexOf(movie);
    movies.splice(indexToDelete, 1);

    fs.writeFile(`${__dirname}/data/movies.json`, JSON.stringify(movies), (err) => {
        res.status(204).json({
            status: 'success',
            data: {
                movie: null
            }
        });
    });
});