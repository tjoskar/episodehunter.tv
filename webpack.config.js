require('es6-shim');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/script/boot.ts',
        register: './src/script/authentication/auth.component.ts'
    },
    output: {
        path: './src/',
        filename: 'one-file-to-rule-them-all.[name].js'
    },
    module: {
        loaders: [{
            test: /\.ts$/, loader: 'ts', exclude: /node_modules/
        }, {
            test: /\.scss$/, loader: 'style!css!sass'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
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
        contentBase: 'src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
};
