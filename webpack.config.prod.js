const base =require('./webpack.config')
const path =require('path')
module.exports = Object.assign({},base,{
  mode: "production",
  entry: "./lib/output.js",
  externals:["node_modules"],
  output: {
    path:path.resolve(__dirname,"dist"),
    filename: "gulu.js",
    library:"gulu",
    libraryTarget:"umd"
  },
})