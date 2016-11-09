const path = require('path');
const webpack = require('webpack');

const PATHS = {
	app: './client/src/index.js',
	dist: path.join(__dirname, 'client', 'dist'),
};

module.exports = {
  devTool: 'eval', //eval is faster than source-map
  entry: [
 // 'react-hot-loader/patch',
  //'webpack-dev-server/client?http://localhost:8080', //enables websocket connection (needs url and port)
  //'webpack/hot/only-dev-server', // performs HMR in the browser "ONLY" prevents reload on syntax errors
   // 'react-hot-loader/patch', 
    'webpack-hot-middleware/client', 
    './client/src/index.js' //Apps Entry Point
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
  // devServer: {
  // 	contentBase: PATHS.dist,
  // },
  resolve: {
  	extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin() //Generates hot update chunks
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ]
}

//Path is looking to serve HTML and CSS, these need to be inside the same 
//File structure as bundle due to the output path of bundle.js