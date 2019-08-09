'use strict'
const webpack = require('webpack')
let webpackConfig = require('./webpack.prod')

webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
    if (stats.hasErrors()) {
        console.log(chalk.red(' Build faild with errors. \n'))
        process.exit(1)
    }
})