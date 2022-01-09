const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', { //遇到/api1前缀,则会触发该代理配置
            target: 'http://localhost:5001', // 请求转发url
            changeOrigin: true, // 控制服务器收到的请求头中Host 字段的值
            pathRewrite: {'^/api1': ''} //重新请求路径
        }),
        proxy('/api2', {
            target: 'http://localhost:5002',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}