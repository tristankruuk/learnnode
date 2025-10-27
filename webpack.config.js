import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//Fetchib andmed API'st
let response = await fetch('https://rickandmortyapi.com/api/character');
let data = await response.json();
console.log(data);

//Ise tehtud lihtne plugin (peab lisama pluginite alla)
//Uus plugin loob lehed karakteri nimega
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
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: "simple-nunjucks-loader",
            options: {},
          },
        ],
      },
    ],
  },



  //Pluginid lõpus (Vähemtähtsad)
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/views/index.njk",
        templateParameters: {
          characters: data.results
        }
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/views/about.njk",
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      template: "./src/views/contacts.njk",
    }),
    ...pages //Spread syntax
],
};