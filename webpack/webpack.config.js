/*
 * Created by king at 2022-1-20 21:13:49
 * Copyright (c) 2022
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssUnicode = require('./config/postcss-unicode');
const { flag } = require('./config/config');

// 记录上一次的progress信息，如果重复则不打印
let preProgressMessage = '';

// 判断mode
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development', // 'development',
    devtool: isProduction ? 'nosources-source-map' : 'eval-source-map',
    entry: {
        main: path.resolve(__dirname, '../src/static/js/index.js')
    },
    output: {
        filename: pathData => {
            const filename = String(pathData.chunk.name || pathData.chunk.id);
            let name = '';
            if (filename.indexOf('static/js') !== -1) {
                // 如果是js对应的css，则放到对应的页面文件夹中
                name = `${filename.replace(/(js|jsx)$/, '')}${isProduction ? `${pathData.hash}.` : ''}js`;
            } else {
                // 非入口chunk
                name = `${flag}/static/js/${filename}.${isProduction ? `${pathData.hash}.` : ''}js`;
            }
            return name;
        },
        path: path.resolve(__dirname, '../build/release/'),
        publicPath: '/',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
        alias: {
            style: path.resolve(__dirname, '../src/static/style/'),
            static: path.resolve(__dirname, '../src/static/'),
            image: path.resolve(__dirname, '../src/static/img/'),
            common: path.resolve(__dirname, '../src/static/js/util/common/'),
            component: path.resolve(__dirname, '../src/static/js/util/component/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(css|scss)$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env', postcssUnicode()]
                            }
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            // 处理图片资源
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `${flag}/static/img/[name]-[contenthash:8][ext]`
                }
            },
            // 字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `${flag}/static/font/[name]-[contenthash:8][ext]`
                }
            }
        ]
    },
    plugins: [
        // 自定义打印进度
        new webpack.ProgressPlugin({
            handler(percentage, message, ...args) {
                const curProgressMessage = `${Math.floor(percentage * 100)}% ${message} ${args && args.join ? args.join(' ') : ''}`;
                if (curProgressMessage !== preProgressMessage) {
                    // eslint-disable-next-line
                    console.log(curProgressMessage);
                    preProgressMessage = curProgressMessage;
                }
            }
        }),
        // 将 CSS 提取到单独的文件中
        new MiniCssExtractPlugin({
            filename: arg => {
                const filename = String(arg.chunk.name || arg.chunk.id);
                let name = '';
                if (filename.indexOf('static/js') !== -1) {
                    // 如果是js对应的css，则放到对应的页面文件夹中
                    name = `${filename.replace(/(js|jsx)$/, '').replace('static/js', 'static/style')}${isProduction ? `${arg.hash}.` : ''}css`;
                } else {
                    // 非入口chunk
                    name = `${flag}/static/style/${filename}.${isProduction ? `${arg.hash}.` : ''}css`;
                }
                return name;
            }
        }),
        new HtmlWebpackPlugin({
            // filename: chunk.replace('static/js', 'views').replace('/main.jsx', '.html'),
            template: path.resolve(__dirname, '../src/index.html'),
            chunks: ['main'],
            inject: 'body',
            cache: true,
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: {
            // 提取runtime内容
            name: `${flag}/static/js/runtime-bunld.js`
        },
        splitChunks: {
            chunks: 'all',
            maxAsyncRequests: 30,
            minSize: 30720,
            minRemainingSize: 30720,
            maxSize: 200000 // 最大200KB
        },
        minimizer: [
            '...',
            new CssMinimizerPlugin()
        ]
    },
    stats: 'errors-only',
    performance: {
        // 关闭性能提示
        hints: false
    }
};
