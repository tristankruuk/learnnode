import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


//Ise tehtud lihtne plugin (peab lisama pluginite alla)
let pages = [];
for(let i = 1; i<10; i++) {
  let page = new HtmlWebpackPlugin({
      filename: `page${i}.html`,
      template: "./src/views/page.njk",
      templateParameters: {
        page: i
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
          name: 'Tristan',
          fruits: ['apple', 'cherry', 'mango', 'pineapple'],
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