#!/usr/bin/env node
const path = require('path')
const webpackConfig = require('./config/webpack.config')
const express = require('express');
const middleware = require('webpack-dev-middleware');


const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});


// const app = express();

// const compiler = webpack(webpackConfig);

// app.use(
//     middleware(compiler, {
//         publicPath: webpackConfig.output.publicPath
//     })
// );

// app.use(require('webpack-hot-middleware')(compiler))

// app.use(express.static(process.cwd() + 'public'))

// main route
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(process.cwd(), 'index.html'))
// });

// app start up
// app.listen(3000, () => console.log('App listening on port 3000!'));


