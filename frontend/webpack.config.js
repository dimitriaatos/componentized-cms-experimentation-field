const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: { babelrc: true },
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader'
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [htmlPlugin]
}
