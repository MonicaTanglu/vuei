
var common = require('./webpack.common.config')
var merge = require('webpack-merge')

var pro = {
    entry: './src/main.js',
    mode: 'production'
}

module.exports = merge(common, pro)