const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'client', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'bundle.[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src', 'client'),
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
        ],
        alias: {
            'client': path.join(__dirname, 'src', 'client'),
        },
    },
};
