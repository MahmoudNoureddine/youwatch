const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src", "index.js"),

    output : {
       filename: "bundle.js",
       path: path.resolve(__dirname, "dist")
    },

    resolve: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
        }
    } ,   

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],

            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },

    plugins: [new HtmlWebpackPlugin()],
}