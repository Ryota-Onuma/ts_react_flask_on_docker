const path = require("path");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
       // 出力先のディレクトリ
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        hot: true,
        port: 3035,
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/react"
            ]
          }
        }
      }]
    },
    target: ["web", "es5"],
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    }
};