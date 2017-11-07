const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProd = process.env.NODE_ENV == 'production';            // 生产环境为true


/**
 * 插件
 */
var plugins = [];

if (isProd) { 
    plugins.push(new webpack.DefinePlugin({
        'process.env': {                                        // 设置成生产环境变量
            NODE_ENV: '"production"'
        }
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin({          // 压缩代码
        compress: {
            warnings: false
        }
    }))
}

plugins.push(
    new HtmlWebpackPlugin({                                     // 根据模板插入css/js等生成最终HTML
        filename: './index.html',                               // 生成的html存放路径，相对于 path
        template: './src/index.html',                           // html模板路径
    }),

    new CopyWebpackPlugin([                                     // 复制文件夹到assets
        {
            from: 'src/assets',
            to: 'assets',
        }
    ])
)


module.exports = {
    entry: ['./src/main.js'],                                   // 编译入口文件
    output: {
        path: path.resolve(__dirname + '/dist'),               // 编译到 dist 目录
        filename: '[name].js?[hash]'                            // 编译后的文件名
    },
    resolve: {
        extensions: ['.js', '.vue', '.jsx'],                    // 后缀名自动补全
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!postcss-loader!`
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!postcss-loader!less-loader!`
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=2000&name=[name].[ext]'      // 注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins,
    devServer: {
        port: 3000,
        contentBase: 'src/',                                   // 确定 app 的根目录，也就是 index.html 的路径
        inline: true,
        stats: 'errors-only',
        historyApiFallback: true,                              // 配置为true, 当访问的文件不存在时, 返回根目录下的index.html文件
        watchOptions: {
            aggregateTimeout: 100,
            poll: 500
        }
    },
    node: {
        global: true,
        crypto: 'empty',
        __dirname: true,
        __filename: true,
        Buffer: false,
        clearImmediate: false,
        setImmediate: false
    }
}