const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/people', people);
app.use('/auth', auth);

app.listen(5050);