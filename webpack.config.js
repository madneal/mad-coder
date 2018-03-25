const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/src/js/index.js",
        output: {
            path: __dirname + "/static/js/",
            filename: "bundle-[hash].js"
        },
        devtool: 'none',
        devServer: {
            contentBase: "./layouts", //本地服务器所加载的页面所在的目录
            historyApiFallback: true, //不跳转
            inline: true,
            hot: true
        },
        module: {
            rules: [{
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }, {
                            loader: "postcss-loader"
                        }],
                    })
                }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};