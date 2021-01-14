const {VueLoaderPlugin} = require("vue-loader")
module.exports = {
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
    new VueLoaderPlugin()
  ]
};