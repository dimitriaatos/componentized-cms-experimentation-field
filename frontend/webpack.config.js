const path = require('path')
// import path from 'path'
// webpack = require('webpack'),
// WebpackPwaManifest = require('webpack-pwa-manifest')

// const manifestPlugin = new WebpackPwaManifest({
//   name: 'My Progressive Web App',
//   short_name: 'MyPWA',
//   description: 'My awesome Progressive Web App!',
//   background_color: '#ffffff',
//   crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
//   icons: [
//     {
//       src: path.resolve('src/assets/icon.png'),
//       sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
//     },
//     {
//       src: path.resolve('src/assets/large-icon.png'),
//       size: '1024x1024' // you can also use the specifications pattern
//     }
//   ]
// })

const HtmlWebPackPlugin = require('html-webpack-plugin'),
htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, './src/index.html'),
  filename: path.resolve(__dirname, './dist/index.html'),
})

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  entry: [
    path.resolve(__dirname, './../frontend/src/index.jsx'),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, './../frontend/dist'),
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './../frontend/src'),
        loader: 'babel-loader',
        options: { babelrc: true },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    htmlPlugin,
    // manifestPlugin,
  ]
}
