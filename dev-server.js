#!/usr/bin/env node
const path = require("path");
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const app = new (require('express'))()
const port = 3000

const compiler = webpack(config)
app.use(devMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(hotMiddleware(compiler))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return;
  }
  console.info("http://localhost:%d/", port)
})
