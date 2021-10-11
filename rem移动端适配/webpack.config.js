
const {resolve}=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry: "./src/index.js",
    output: {
        filename: "js/main.js",
        path: resolve(__dirname,"built")
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    {
                        loader:  "px2rem-loader",
                        // // options here
                        options: {
                          remUnit: 16,
                          remPrecision: 8
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "production",
    devServer: {
        host:'localhost',
        port:9999,
        static:{
            directory:'./src'
        },
        compress:true,
        open:true,
    }
}
