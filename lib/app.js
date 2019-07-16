const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/memer', require('./routes/memes'));

app.use(require('./middle/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
