const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const APP_DIR = resolve(__dirname, '../src');
const PROJECT_ROOT = resolve(__dirname, '..');

module.exports = {
    entry: {
        index: [APP_DIR],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    output: {
        path: resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
        alias: {
            '@src': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                exclude: /node_modules/,
                enforce: "pre"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ],
    },
    plugins: [
        new Dotenv({
            systemvars: true,
            path: `${PROJECT_ROOT}/.env`,
            defaults: `${PROJECT_ROOT}/.env.defaults`
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            
        })
    ]
};
