var path = require('path')
// var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'assets': path.resolve('src/assets'),
            '@': path.resolve('src'),
            '@component': path.resolve('src/components')
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.sass$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader?indentedSyntax'
            ]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    'scss': [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                    'sass': [
                        'vue-style-loader',
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ]
                }
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}