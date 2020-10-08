const { merge } = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const contentBase = path.join(__dirname, '../public');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    output:{
        publicPath: '/'
    },
    devServer: {
        open: false,
        historyApiFallback: true,
        // sockHost: 'localhost',
        // sockPort: '8866',
        historyApiFallback: true,
        port: 7301, // https://webpack.js.org/configuration/dev-server/#devserverport
        open: false, // https://webpack.js.org/configuration/dev-server/#devserveropen
        hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
        compress: true, // https://webpack.js.org/configuration/dev-server/#devservercompress
        stats: 'errors-only', // https://webpack.js.org/configuration/dev-server/#devserverstats-
        overlay: true, // https://webpack.js.org/configuration/dev-server/#devserveroverlay

        contentBase: contentBase,
        clientLogLevel: 'warn',
        disableHostCheck: true,
    }
});
