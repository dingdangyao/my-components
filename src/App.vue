<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <login :option="option"></login>
    <record></record>
    <scrollLoader></scrollLoader>
    <backTop></backTop>
    <svg-icon icon-class="icon-lock"></svg-icon>
    <h1>wwwwwwwww</h1>
    <h1>wwwwwwwww</h1>
    <h1>wwwwwwwww</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      option: {
        width: 400,
        time: 60,
        codeType: "phone", //phone为手机验证码/img为图片验证码
        column: {
          userName: {
            label: "用户名",
            tip: "改变字段为user",
            prop: "user",
            placeholder: "请输入用户名",
            autocomplete: "off",
            rules: { required: true, message: "请输入用户名", trigger: "blur" }
          },
          password: {
            label: "密码",
            placeholder: "请输入密码",
            autocomplete: "off",
            rules: { required: true, message: "请输入密码", trigger: "blur" }
          },
          code: {
            hide: true
          }
        }
      }
    };
  },
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
