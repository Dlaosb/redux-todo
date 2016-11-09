const express = require('express');
const path = require('path');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const port = 8080; 

const app = express(); 
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler)); 

//app.use('/', express.static(path.join(__dirname, 'client')));  
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(port, ()=> {
  console.log(`I am listening on ${port}`); 
});