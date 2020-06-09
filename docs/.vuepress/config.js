module.exports = {
  theme:"",
  title: "hy-ui",
  description: "A lightweight creator for VuePress project.",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/laohubzy/hy-ui",
    editLinks: false,
  },
};