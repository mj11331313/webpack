const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
module.exports = {
    entry: {
        entry: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
<<<<<<< HEAD
        publicPath:'http://127.0.0.1:8082/'
=======
        publicPath:'http://127.0.0.1:8081/'
>>>>>>> 508aa8cc4efdbd02ed0be8f2e8646cd730c40080
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
        })
        
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8082,
        compress: true
    }
};