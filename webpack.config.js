const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack.js');//模块化配置
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'http://127.0.0.1:8082/'//图片文件路径问题
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                // use: [
                //     {
                //         loader: 'style-loader'
                //     },{
                //         loader: 'css-loader'
                //     }
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:'css-loader',
                        options: {
                            importLoader: 1
                        }
                    },"postcss-loader"]
                  })
            },{
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            },{//打包html中的图片(img标签)
                test: /\.(html|htm)$/i,//i:不区分大小写
                use: ['html-withimg-loader']
            },{
                test:/.scss/,
                // use:['style-loader','css-loader','sass-loader']
                use:ExtractTextPlugin.extract({
                    use:[{
                        loader:'css-loader'
                    },{
                        loader:'sass-loader'
                    }],
                    fallback:'style-loader'
                })
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "es2015","react"
                        ]
                    }
                },
                exclude:/node_moudles/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true//压缩打包后的html文件
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin("css/index.css"),
        // new UglifyJSPlugin()
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        //所有权声明(不必要的)：
        new webpack.BannerPlugin('Made by Cynthia_mj11331313'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //name对应入口文件中的名字
            name:['jquery','vue'],
            filename:'assets/js/[name].js',//出口文件路径
            minChunks:2//固定写法
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
        
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8082,
        compress: true
    },
    watchOptions:{
        poll:1000,
        aggregeateTimeout:500,
        ignored:/node_muodles/
    }
};