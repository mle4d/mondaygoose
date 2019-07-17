const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1/memer', require('./routes/memes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;



// app.get('/hello/:id', function(req, res, next) {
//   res.json({ msg: 'Hello world, we are CORS-enabled!' });
// });

// app.listen(80, function() {
//   console.log('CORS-enabled web server is listening on port 80');
// });
