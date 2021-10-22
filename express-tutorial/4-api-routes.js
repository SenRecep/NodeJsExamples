const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const found = products.find(x => x.id == Number(req.params.id)) ?? null;
    res.status(200).json(found)
});

app.get('/products/v1/quary', (req, res) => {
    const { search, limit } = req.query;
    let data = [...products];
    if (search) data = data.filter(x => x.name.startsWith(search));
    if (limit) data = data.splice(0, Number(limit));
    res.status(200).json(data);
});


app.get('/products/:id/reviews/:viewId', (req, res) => {
    console.log(req.params);
    res.send('Hi');

});
app.listen(5050);