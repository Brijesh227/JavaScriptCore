// 1. Extract Query Parameters

// https://example.com/users?name=John&age=30

const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    const name = req.query.name; // Get the 'name' parameter
    const age = req.query.age;   // Get the 'age' parameter
    
    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 2. Extract Route Parameters

// https://example.com/users/John/30

const express = require('express');
const app = express();

app.get('/users/:name/:age', (req, res) => {
    const name = req.params.name; // Get the 'name' parameter from the URL
    const age = req.params.age;   // Get the 'age' parameter from the URL
    
    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 3. Using JavaScript's URL API

const url = "https://example.com/users?name=John&age=30";
const parsedUrl = new URL(url);

const name = parsedUrl.searchParams.get('name'); // Output: John
const age = parsedUrl.searchParams.get('age');   // Output: 30

console.log(`Name: ${name}, Age: ${age}`);
