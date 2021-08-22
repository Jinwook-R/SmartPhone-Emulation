const path = require('path')

module.exports = {
    mode : 'development',
    entry : {
        main: './src/App.js'
    },
    output : {
        path : path.resolve('./dist'),
        filename : '[name].js',
        publicPath : '/dist/' //webpack dev
    },
    module: {
        rules:[
            {   
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '../dist'
                    }
                }]
            }
        ]
    },
    //webpack dev
    devServer: { 
        static: __dirname,
        port: 9000
    },
}