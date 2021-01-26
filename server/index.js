// require('newrelic');
const express = require('express');
// const morgan = require('morgan');
// const db = require('../database/index.js')
const app = express();
const port = 3000;
const axios = require('axios');

// app.use(morgan('dev'));

app.use('/', express.static('public'));

// app.get('/loaderio-8e04178e235f95e39c1000c6bb0dd392.txt', (req, res) => {
//   res.send('/loaderio-8e04178e235f95e39c1000c6bb0dd392');
// });

// app.use('/:id', express.static('public'));

app.get('/api/news/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Message listening at port http://localhost:${port}`);
});
