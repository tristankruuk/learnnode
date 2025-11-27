import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from "webpack";

//Fetchib andmed API'st
let response = await fetch('https://rickandmortyapi.com/api/character');
let data = await response.json();
console.log(data);

//Ise tehtud lihtne plugin (peab lisama pluginite alla)
//Uus plugin loob lehed karakteri id järgi
let pages = [];
for(let character of data.results) {
  let page = new HtmlWebpackPlugin({
      filename: `${character.id}.html`,
      template: "./src/views/page.njk",
      templateParameters: {
        character, //Sama mis character: character
      }
    });
    pages.push(page);
}


export default {


  //Sisendid ja väljundid alguses
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },



  //Server ka suhteliselt oluline
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
         use: [
            "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },



  //Pluginid lõpus (Vähemtähtsad)
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
    })
  ],
};