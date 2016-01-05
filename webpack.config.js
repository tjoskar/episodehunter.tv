require('es6-shim');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/boot.ts',
    output: {
        filename: 'output.js'
    },
    module: {
        // preLoaders: [{
        //     test: /\.ts$/, loader: 'tslint?emitErrors=false&failOnHint=false', exclude: /node_modules/
        // }],
        loaders: [{
            test: /\.ts$/, loader: 'ts', exclude: /node_modules/
        }],
        noParse: [/zone\.js\/dist\/.+/]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devServer: {
        port: 9000,
        inline: true,
        hot: true,
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
