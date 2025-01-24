const express = require('express');

const {
    allMovies,
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie
} = require('../Controllers/movieController');

const router = express.Router();

router.route('/api/v1/movies')
    .get(allMovies)
    .post(createMovie);

router.route('/api/v1/movies/:id')
    .get(getMovie)
    .patch(updateMovie)
    .delete(deleteMovie);

module.exports = router;