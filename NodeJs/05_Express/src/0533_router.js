const express = require('express');
const fs = require('fs');

const app = express();
const movies = JSON.parse(fs.readFileSync(`${__dirname}/data/movies.json`));

const PORT = 3000;
app.listen(PORT,() => {
    console.log('server has started...');
});

const allMovies = (req, res) => {
    res.status(200).json({
        status: 'success',
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
            status: 'success',
            data: {
                movie: newMovie
            }
        });
    });
}

/*
Normal approach

app.route('/api/v1/movies')
    .get(allMovies)
    .post(createMovie);

*/

// Router middleware

const movieRouter = express.Router();

movieRouter.route('/api/v1/movies')
    .get(allMovies)
    .post(createMovie);

app.use(movieRouter);