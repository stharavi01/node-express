const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

//middleware functions
app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send("home");
});

app.get('/about', (req, res) => {
    res.send("about");
});

app.get('/api/products', (req, res) => {
    res.send("Products");
});

app.get('/api/items', (req, res) => {
    res.send("Items");
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
});
