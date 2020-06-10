const path = require('path')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
let resolvePath = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  theme:"",
  title: "hy-ui",
  description: '老虎不长牙的ui组件库',
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  plugins: {
    'vuepress-plugin-auto-sidebar': {
      titleMode: 'default',
      nav: true,
    }
  },  
  markdown: {
    lineNumbers: true //显示行号
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "更新时间",
    repo: "https://github.com/laohubzy/hy-ui",
    editLinks: false,
  },
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
        .test(/\.js,.vue$/)
        .pre()
        .include
          .add(resolvePath('/src'))
          .end()
        .use('eslint')
          .loader('eslint-loader');
    config
    .plugin('stylelint')
      .use(StylelintWebpackPlugin, [{
        context: "src",
        configFile: 'stylelint.config.js',
        files: '**/*.scss',
        failOnError: false,
        quiet: true,
        syntax: 'scss'
      }])
  }  
};