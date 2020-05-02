<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <!-- <login :option="option" @refresh="refresh" @submit="submit"></login>-->
    <backTop></backTop>
    <icon-svg icon-class="满意度"></icon-svg>
    <icon-svg icon-class="people"></icon-svg>
    <icon-svg icon-class="爱心"></icon-svg>
    <cardimg :option="option"></cardimg>
    <scrollLoader></scrollLoader>
  </div>
</template>

<script>
import Mock from "../node_modules/mockjs/dist/mock.js";
const demoData = [];
const base = parseInt(Math.random() * 60, 10) + 10;
const demoDataNum = 10;
for (let i = 0; i < demoDataNum; i++) {
  let likeNum = Mock.mock("@integer(1, 100)");
  let downloadNum = Mock.mock("@integer(1000, 2000)");
  demoData.push({
    url: `https://picsum.photos/id/${base + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${base + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${base + i}/300/200`,
    likeNum: `${likeNum}`,
    downloadNum: `${downloadNum}`
  });
}
export default {
  name: "App",
  data() {
    return {
      option: {
        preview: true,
        data: demoData,
        likeClick: function(item, index) {
          item.likeNum++;
          this.$message.success("您点击了收藏：" + index);
          console.log(JSON.stringify(item));
        },
        downloadClick: function(item, index) {
          item.downloadNum++;
          this.$message.success("您点击了下载图片:" + index);
          console.log(JSON.stringify(item));
        },
        searchClick: function(item, index) {
          this.$message.success("开始搜索同类相似图片:" + index);
          console.log(JSON.stringify(item));
        },
        gutter: 10
      }
    };
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
