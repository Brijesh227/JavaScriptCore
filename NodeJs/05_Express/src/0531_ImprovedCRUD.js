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

const allMovies = (req, res) => {
    res.status(200).json({
        status:  'success',
        data: {
            movies
        }
    });
};

const createMovie = (req, res) => {
    console.log(req.body);              

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
}

const getMovie = (req, res) => {         // ? means optional
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
}; 

const updateMovie = (req, res) => {
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
};

const deleteMovie = (req, res) => {
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
};

app.get('/api/v1/movies',allMovies);
app.post('/api/v1/movies',createMovie);
app.get('/api/v1/movies/:id/:director?',getMovie);
app.patch('/api/v1/movies/:id',updateMovie);
app.delete('/api/v1/movies/:id',deleteMovie);

// ---- OR -----

app.route('/api/v1/movies')
    .get(allMovies)
    .post(createMovie);

app.route('/api/v1/movies/:id')
    .get(getMovie)
    .patch(updateMovie)
    .delete(deleteMovie);
    