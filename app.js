'use strict';
let app = require('express')()
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/test1', (req, res) => {
  console.log('Test 1', req.body);
  res.status(200).json(req.body);
});

app.post('/test2', (req, res) => {
  console.log('Test 2', req.body);
  res.status(200).json(req.body);
});

app.post('*', function(req, res){
  res.status(404).send('Route not found');
});

require('dotenv').config();

let port = process.env.PORT;
if (! port) port = 9001;
app.listen(port, function () {
  console.log(`Subscriber server is running on port ${port}.`);
});