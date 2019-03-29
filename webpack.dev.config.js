// var path = require('path')
// var webpack = require('webpack')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
var merge = require('webpack-merge')
var common = require('./webpack.common.config')

var dev = {
    entry: ['babel-polyfill', './src/main.js'],
    devtool: '#eval-source-map',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        overlay: true
    }
}
module.exports = merge(common, dev)