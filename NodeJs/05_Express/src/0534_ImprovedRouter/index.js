/* database configuration, error handling logic, setting envrionment variables goes here

    In mvc handlers treat as controller

    // for single export use:
        module.exports = {
            allMovies,
            createMovie
        }

    // for multiple export use:
        exports.allMovies = allMovies;

*/

const app = require('./app');

const PORT = 3000;
app.listen(PORT,() => {
    console.log('server has started...');
});