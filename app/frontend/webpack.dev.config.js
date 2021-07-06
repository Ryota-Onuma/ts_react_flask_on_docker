const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
       // 出力先のディレクトリ
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:3500/',
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