const express = require('express');
const movieRouter = require('./Routes/moviesRoute');

const app = express();

// Router middleware
app.use(movieRouter);

module.exports = app;