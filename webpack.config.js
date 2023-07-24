const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devServer: {
        // static: {`
        //     directory: path.resolve(__dirname, 'dist/index.html')
        // },`
        port: 8080,
        open: true,
        hot: true,
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name][contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader']
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    }
}