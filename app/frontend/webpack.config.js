const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    // 出力先のディレクトリ
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true,
    port: 3035,
  },
  module: {
    rules: [
      {
        test: /\.(ts | tsx) ?$/,
        use: {
          loader: "awesome-typescript-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  target: ["web", "es5"],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};
