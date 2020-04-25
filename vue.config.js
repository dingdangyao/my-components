const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  // 将entry指向examples
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  // 为packages目录添加babel-loader处理
  chainWebpack: config => {
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .use("svg-sprite")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
      .include.add(path.join(__dirname, "src/icons"))
      .end();
    config.module
      .rule("js")
      .include.add(resolve("packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};
