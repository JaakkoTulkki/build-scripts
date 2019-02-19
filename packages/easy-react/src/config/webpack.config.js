const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", process.cwd() + "/src/index.js"],
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({title: 'chicken', template: path.resolve(process.cwd(), 'index.html')}),
      // new ExtractTextPlugin('style.css')
    ],

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // module: {
    //     rules: [
    //         // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    //         { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    //
    //         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //         { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    //         {
    //           test: /\.scss$/,
    //           use: ExtractTextPlugin.extract({
    //             fallback: 'style-loader',
    //             use: ['typings-for-css-modules-loader?modules&namedExport&camelCase', 'sass-loader']
    //             // use: ['css-loader', 'sass-loader'] namedExport&camelCase
    //           })
    //         }
    //     ]
    // },
};