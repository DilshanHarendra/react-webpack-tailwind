const path = require('path')
const htmlWebpackPlugin= require('html-webpack-plugin')
const copyWebpackPlugin= require('copy-webpack-plugin')
module.exports={
    entry: './src/index.js',
    output: {
        clean: true,
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
       // publicPath: "./public",
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
          },

        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new copyWebpackPlugin({
            patterns: [
                {
                    from: "./public",
                    to: path.resolve(__dirname,'dist'),
                    globOptions:{
                        ignore:[
                            "**/index.html"
                        ]
                    }
                },
            ],
        }),
    ]
}
