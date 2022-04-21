const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
    if(IS_DEV) return 'eval';
    if(IS_PROD) return false;
}


module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', 'ts', '.tsx', '.json']
    },
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Reddit",
            template: path.resolve(__dirname, 'index.html')
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    },
    devtool: setupDevtool()
};