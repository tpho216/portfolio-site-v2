const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    target: "web",
    mode: "development",//switching between develop & production to hide webpack from source map in devTool

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    output: {
        path: path.resolve("build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                test: /\.(ts|tsx)$/,
                loader: "ts-loader" },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
                exclude: /node_modules\/@reduxjs/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("src","index.html"),
        }),
        new MiniCssExtractPlugin({
            filename:"./index.css",
        }),
        new Dotenv({
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/firebase-messaging-sw.js", to: "firebase-messaging-sw.js"},
            ]
        })
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
    }
}