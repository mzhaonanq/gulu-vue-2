const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader")
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "main.js"
  },
  // devServer: {
    // contentBase: path.join(__dirname, 'dist'), // html所在路径
    // compress: true, // 是否压缩
    // port: 8080, // 端口
    // hot: true, // 热部署
    // open: true, // 打包完成后自动打开网页
  // },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.scss$/i,
        use:["style-loader","css-loader","sass-loader"]
      },
      {
        test:/\.svg$/,
        loader:"svg-sprite-loader"
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./index.html", title: "gulu-vue"}),
    new VueLoaderPlugin()
  ]
};