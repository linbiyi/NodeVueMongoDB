// 检查版本 
require('./check-versions')()

//生产版本
process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')  //nodejs里面内置的路径模块
var chalk = require('chalk') //输出彩色字体插件
var webpack = require('webpack')  //打包的核心插件
var config = require('../config') //    ../config == ../config/index.js   只有index.js可以省略
var webpackConfig = require('./webpack.prod.conf')  //加载webpack生产包的配置

var spinner = ora('building for production...') //日志输出的插件
spinner.start()

//rm,打包之前，将上一次的包删除; path.join()链接主目录和子目录的方法
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
