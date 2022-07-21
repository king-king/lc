/*
 * Created by king at 2022-1-20 22:16:12
 * Copyright (c) 2022
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { app } = require('./config/config');
const config = require('./webpack.config');

const port = 8003;
const host = 'local.lc.com';

module.exports = merge(config, {
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        compress: true,
        historyApiFallback: false,
        port,
        host,
        open: {
            target: '/',
            app: {
                name: app
            }
        }
    }
});
