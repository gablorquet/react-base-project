const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: '',
    output: {
        publicPath: './'

    },
    plugins: [
        new CompressionPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/images', to: 'images' },
                { from: 'public/locales', to: 'locales' },
                { from: 'public/icons', to: 'icons' }
            ]
        }),
    ]

});
