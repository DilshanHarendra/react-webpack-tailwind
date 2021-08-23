const path = require('path')
const htmlWebpackPlugin= require('html-webpack-plugin')
module.exports={
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'/dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                }
            }

        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}
