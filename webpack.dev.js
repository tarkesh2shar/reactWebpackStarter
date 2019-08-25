const merge=require('webpack-merge');
const common=require('./webpack.common');

module.exports=merge(common,{
    mode:"development",
    devtool:"inline-source-map",
    devServer:{
        contentBase:'./dist',
        historyApiFallback: true,
        publicPath: "/",
        proxy: {
            '/server':"http://localhost:2000"
        }
    }
});