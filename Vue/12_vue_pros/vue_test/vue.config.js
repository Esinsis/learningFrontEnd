const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方式一： 只能代理一个服务器， 且如果path 和 public 下的静态资源重名，不会转发请求
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 方式二
  // devServer: {
  //   proxy: {
  //     '/user': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: {'^/user':''},
  //       ws: true, // 支持websocket
  //       changeOrigin: true
  //     },
  //     '/role': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: {'^/role':''},
  //       ws: true, // 支持websocket
  //       changeOrigin: true
  //     }
  //   }
  // }
})
