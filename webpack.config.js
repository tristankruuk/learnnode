import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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

  //Pluginid lõpus (Vähemtähtsad)
  plugins: [new HtmlWebpackPlugin()],
};