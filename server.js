const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const port = 8080; 

app.use(express.static(path.join(__dirname, 'client', 'dist')));  

app.use((req, res) => {
  res.end(404);
});

app.listen(port, ()=> {
  console.log(`I am listening on ${port}`); 
});
