'use strict'

const path = require('path')

module.exports = {
    target: 'web',
    entry: {
        vendor: path.resolve('src', 'vendor.js'),
        app: path.resolve('src', 'app.js')
    },
    output: {
        path: path.resolve('public'),
        filename: '[name].build.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss']
    },
    devServer: {
        contentBase: path.resolve('public'),
        port: 5001
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                        targets: {
                            browsers: ['last 4 versions', 'IE >= 8']
                        },
                        useBuiltIns: 'usage',
                        corejs: 3
                    }], '@babel/preset-react']
                }
            }
        }, {
            test: /\.s(a|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}
