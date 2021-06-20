<template>
  <div></div>
</template>

<script>
import { strToMd5 } from "../../utils/md5.js"; // 密码加密
export default {
  // data() {
  //   return {
  //     userName: "",
  //     password: "",
  //   };
  // },
  created() {
    // 从浏览器的缓存中， 获取登录名和密码
    let userName = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
    console.log(localStorage.getItem("password"));
    // 发送登录请求
    //  this.$get('/admin/login', this.ruleForm);
    // 密码和用户不存在跳转至登录页
    // console.log('password', strToMd5(password));
    if (!password) {
      console.log(123);
      this.$router.push("/login");
    } else {
      console.log(222);
      if (strToMd5(password) == "e847999b3a0386c2c7ae3d99b073e8cd") {
        // 成功之后保存token
        sessionStorage.setItem("token", "123456789");
        // 跳转到后台页面
        this.$router.push({
          path: "/layout",
        });
      } else {
        this.$router.push({path:"/login"});
      }
    }
  },
};
</script>

<style>
</style>