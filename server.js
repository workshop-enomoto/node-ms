'use strict';

const express = require('express');

// Constants
const PORT = 9001;
const HOST = '0.0.0.0';

var os = require("os");
var hostname = os.hostname();
var counter = 0;

// App
const app = express();
app.get('/hello-node', (req, res) => {
  counter++;
  res.send('Hello World Node.js: ' + hostname + ' -> ' + counter);
  console.log('Hello World Node.js: ' + hostname + ' -> ' + counter);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
