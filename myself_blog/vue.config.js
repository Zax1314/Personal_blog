let proxyObj = {};
proxyObj['/api'] = {
    ws: false,
    target: "http://121.4.51.70:8080/ssm_web-1.0-SNAPSHOT",
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
};
module.exports = {
    publicPath:'/',
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: proxyObj
    }
}