const express = require('express');
const app = express();
const morgan = require('morgan');
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

// app.use('/api', authorize);
app.use([logger, authorize]);

// app.use(express.static('./public'));

app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

// app.get('/', logger, (req, res) => {
//     res.status(200).send('Home Page');
// });

// app.get('/about', logger, (req, res) => {
//     res.status(200).send('About Page');
// });

// app.get('/api/products', [logger, authorize], (req, res) => {
//     res.status(200).json(products);
// });

app.listen(5050);