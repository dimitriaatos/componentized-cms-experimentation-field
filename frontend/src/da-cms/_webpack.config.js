const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // watch: true,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2', 
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: { babelrc: true },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': 'commonjs react' 
  }
}
