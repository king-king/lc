/*
 * Created by king at 2022-1-20 22:16:12
 * Copyright (c) 2022
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { app } = require('./config/config');
const config = require('./webpack.config');

const port = 8318;
const host = 'local.lc.com';

module.exports = merge(config, {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        compress: true,
        historyApiFallback: true,
        port,
        host,
        open: {
            target: '/',
            app: {
                name: app
            }
        },
        proxy: {
            '/api/**': {
                target: 'http://j-api.jd.com/mocker/data?p=1969&v=GET&u=',
                secure: true,
                changeOrigin: true
            }
        }
    }
});
