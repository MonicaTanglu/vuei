const common = require('./webpack.common.config')
const merge = require('webpack-merge')
const components = require('../components.json')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const entrys = {}

Object.keys(components).forEach(item => {
    entrys[item] = components[item]
})


var pro = {
    entry: entrys,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name].js',
        library: 'VueDropUpload',
        libraryTarget: 'umd'
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
            },
            sourceMap: true,
            parallel: true
        }),
        new ExtractTextPlugin({
            filename: '/theme/[name].css'
        })
    ],
}

module.exports = merge(common, pro)
