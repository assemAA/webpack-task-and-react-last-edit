const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    
    entry :  './src/index.js'   ,
    output : {

        path: path.resolve(__dirname, 'distOutputBuild'),
        filename: 'my-first-webpack-bundle.js',
    },

    mode: 'development' ,

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader' 
            }
          } ,
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          } ,
          {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
        }
        ]
      } ,

    plugins : [
        new HtmlWebpackPlugin ({
            template : './src/index.html' ,

        })
    ] 



   
}
