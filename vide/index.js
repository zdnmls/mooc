const fs = require('fs')
const webpack = require('webpack')
const path = require('path')
const option = {
    mode: 'development',
    watch: true,
    entry: "./public/js/app.js",

    output: {
        path: path.resolve(__dirname, "../videos/public"),
        filename: 'js/v.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '/css',
                        outputPath: 'css/',
                        name: '[name].[ext]',
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 300,
                        publicPath: '/img',
                        outputPath: 'img/'
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader'
                }]
            }
        ]
    }
}
let n = 1;
webpack(option, (err, stats) => {
    if (err) {
        console.log(err.stats || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    } else {
        console.log('sucess'+':' + n++)
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
        console.error(info.error);
    }
    if (stats.hasWarnings()) {
        // console.warn(info.warnings);
    }
})