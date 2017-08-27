// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'), //
    index: path.resolve(__dirname, '../dist/index.html'), //输出首页的模板，路径
    assetsRoot: path.resolve(__dirname, '../dist'), //打包的根目录
    assetsSubDirectory: 'static', //静态资源的二级输出目录
    assetsPublicPath: '/',  //打完包后输出的默认路径(有用，设置路径)
    productionSourceMap: true, //
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),  //开发环境
    port: 8080,     //端口
    autoOpenBrowser: true,  //是否自动打开浏览器
    assetsSubDirectory: 'static',   //子路径
    assetsPublicPath: '/',  //文件引用的公共目录
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
