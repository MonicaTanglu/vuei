
var common = require('./webpack.common.config')
var merge = require('webpack-merge')
const path = require('path')
var pro = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist')
    }
}

module.exports = merge(common, pro)