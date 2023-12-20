const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 其他配置项...
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Your Title', // 在这里设置你想要显示的标题
      template: 'public/index.html' // 这里指定 HTML 模板文件的路径
    })
  ]
}