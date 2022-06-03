const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
        loadPage: './src/loadpage.js',
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/favicon.png',
            title: 'Cheese on Bread'
        }),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "style-loader",
            },
            {
                test: /\.css$/i,
                loader: "css-loader",
                options: {
                    url: true,
                },
            },            
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },            
        ],
    },
};