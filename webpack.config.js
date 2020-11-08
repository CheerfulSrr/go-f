'use strict'
const path = require('path');
const { argv } = require('yargs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const backendPath = 'http://localhost:8080'

const {
  mode = 'development'
} = argv

module.exports = {
  mode: mode === 'development' ? mode : 'production',
  entry: './src/index.js',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 5000,
    // proxy: [
    //   {
    //     context: [
    //       "/"
    //     ],
    //     target: backendPath + '/'
    //   },
    //   {
    //     context: path => {
    //       return /^\/resources\/js\/bundle\.(css|js)$/.test(path);
    //     },
    //     target: backendPath + '/',
    //     changeOrigin: true,
    //   }
    // ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].bundle.css',
      chunkFilename: 'static/css/[name].bundle.css'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: [ '.js', '.jsx', '.json' ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  }
}