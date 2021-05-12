

const path = require('path')

// vue.config.js
module.exports = {
  // 选项...
  // 关闭ESlint语法检查功能
  lintOnSave: false,
  // 来发服务器的相关配置
  devServer: {
    // 配置静态资源文件目录
    contentBase: path.join(__dirname, 'public'),
    // 自动打来浏览器
    open: true,
    // 设置服务的端口号
    port: 8888
    // proxy: 'http://localhost:4000'
  },
  // webpack相关配置
  configureWebpack: {
    resolve: {
      // 解析, 配置路径别名
      alias: {
        '@c': path.resolve(__dirname, 'src/components/'),
        '@v': path.resolve(__dirname, 'src/views/'),
        '@a': path.resolve(__dirname, 'src/assets/'),

      }
    }
  }
}