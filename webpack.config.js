import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
  },



  //Server ka suhteliselt oluline
  devServer: {
    static: {
      directory: path.join(import.meta.dirname, 'public'),
    },
    compress: true,
    port: 9000,
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
      }
    ],
  },



  //Pluginid lõpus (Vähemtähtsad)
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
  ],
};