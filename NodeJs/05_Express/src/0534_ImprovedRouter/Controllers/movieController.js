const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/movies.json');
const movies = JSON.parse(fs.readFileSync(filePath));

exports.allMovies = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            movies
        }
    });
};

exports.createMovie = (req, res) => {
    console.log(req.body);              

    const newMovie = Object.assign({id: movies.length + 1}, req.body);
    movies.push(newMovie);
    fs.writeFile(filePath, JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        });
    });
};

exports.getMovie = (req, res) => {         
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
        data: {
            movie
        }
    });
}; 

exports.updateMovie = (req, res) => {
    const updateMovie = req.body;
    const { id } = req.params;
    const movie = movies.find(ele => ele.id === id * 1);
    const indexToUpdate = movies.indexOf(movie);

    const updateMovieObject = Object.assign(movie, updateMovie);
    movies[indexToUpdate] = updateMovieObject;
    
    if(!movie) {
        return res.status(404).json({
            status:  'fail',
            message: 'Invalid ID'
        });
    }
    fs.writeFile(filePath, JSON.stringify(movies), (err) => {
        res.status(201).json({
            status:  'success',
            data: {
                movie
            }
        });
    });
};

exports.deleteMovie = (req, res) => {
    const { id } = req.params;
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