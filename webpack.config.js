var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = {
    plugins: [
        new ExtractTextPlugin("jenkins-flat.css", {allChunks: true})
    ],
    entry: {
        index: './src/index.js'
    },
    output: {
        path: 'dist',
        filename: 'build.tmp.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!!postcss-loader!sass-loader')
            },
            {test: /\.(png|jpg|svg)$/, loader: 'url-loader'}
        ],
        preLoaders: [
            {test: /\s[a|c]ss$/, exclude: /node_modules/, loader: 'sasslint-loader'}
        ]
    },
    postcss: function () {
        return [autoprefixer, cssnano]
    }
};