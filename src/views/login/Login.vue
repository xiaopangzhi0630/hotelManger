<template>
  <div class="layout">
    <canvas id="particle-canvas" width="910" height="875"></canvas>

    <div class="main">
      <span class="manager-style">Rabbit后台管理系统</span>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" size="medium" label-width="80px"
        class="demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="admin" autocomplete="off"
            style="width:85%"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.password" placeholder="123456"
            autocomplete="off" style="width: 85%">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="checked">
          <el-checkbox v-model="ruleForm.checked">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 80%">登录</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {
    startAnimation
  } from "@a/js/login.js"; // 登录页动画
  import {
    strToMd5
  } from "../../utils/md5.js"; // 密码加密

  export default {
    data() {
      const validateUserName = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      };

      const validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"));
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };

      return {
        ruleForm: {
          userName: "admin",
          password: "123456",
          checked: false,
        },
        rules: {
          userName: [{
            validator: validateUserName,
            trigger: "blur",
          }, ],
          password: [{
            validator: validatePass,
            trigger: "blur",
          }, ],
        },
      };
    },

    created() {
      this.keyupEnter();
    },

    mounted() {
      startAnimation();
    },

    methods: {
      submitForm(formName) {
        console.log(strToMd5(this.ruleForm.password));
        // 验证是否成功
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // 请求接口  实现登录  调用全局混入的get 请求方法
            // this.$get('/admin/login', this.ruleForm); //开发中使用登录接口
            if (strToMd5(this.ruleForm.password) == "74ce4a21f159e81638334cbe243cd2cf") {
              // 保存token
              sessionStorage.setItem('token', '123456789');
              // 保存登录名
              localStorage.setItem('userName', this.ruleForm.userName);
              // 记住密码
              if (this.ruleForm.checked) {
                console.log('记住密码');
                localStorage.setItem('password', this.ruleForm.password);
              }

              // 跳转到后台页面
              this.$router.push({
                path: "/layout",
              });

            } else {
              this.$message({
                message: "用户或密码错误！",
                type: "warning",
              });
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      keyupEnter() {
        document.onkeydown = e => {
          if (window.event.keyCode == 13) {
            // 调用方法
            this.submitForm('ruleForm');
          }
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  #particle-canvas {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom,
        rgb(10, 10, 50) 0%,
        rgb(60, 10, 60) 100%);
    vertical-align: middle;
  }

  .layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    margin: 0 auto;

    .main {
      position: absolute;
      width: 500px;
      height: 300px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: rgb(255 255 255 / 8%);
    }

    .bg {
      position: absolute;
      width: 460px;
      height: 250px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: rgb(215, 223, 208);
      opacity: 0.1;
    }

    .manager-style {
      z-index: 9999;
      display: inline-block;
      height: 60px;
      line-height: 60px;
      width: 100%;
      color: #ccc;
      text-align: center;
      font-size: 25px;
      font-family: cursive;
    }
  }
</style>