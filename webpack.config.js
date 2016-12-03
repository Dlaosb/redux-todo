const path = require('path');
const webpack = require('webpack');

const PATHS = {
	app: './client/src/index.js',
	dist: path.join(__dirname, 'client', 'dist'),
};

module.exports = {
  devTool: 'eval', //eval is faster than source-map
  entry: [
    './client/src/index.js' 
  ],
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
  	loaders: [{
  		exclude: /node_modules/,
  		loaders: ['babel-loader']
  	}],
  },
  watch: true, 
  devTool: 'source-map',
  devServer: {
  	contentBase: PATHS.dist,
  },
  resolve: {
  	extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

//Path is looking to serve HTML and CSS, these need to be inside the same 
//File structure as bundle due to the output path of bundle.js