const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "http://localhost:3500/",
    // path: path.resolve(__dirname, '../static/')
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
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  target: ["web", "es5"],
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};
