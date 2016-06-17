var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/assets');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

// webpack options
module.exports =  {
    entry: [APP_DIR + '/main.js'],
    output: {
        publicPath: '/assets/',
        path: BUILD_DIR,
        filename: 'bundle.min.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.js?$/, include : APP_DIR, loader: 'babel'}
        ],
    }
};