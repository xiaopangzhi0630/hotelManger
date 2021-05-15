<template>
  <div class="layout">
    <canvas id="particle-canvas" width="910" height="875"></canvas>

    <div class="main">

      <span class="manager-style">hotel管理系统</span>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" size="mini" label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input type="password" v-model="ruleForm.userName" placeholder="admin" autocomplete="off"
            style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="123" autocomplete="off" style="width: 80%">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="checked">
          <el-checkbox v-model="ruleForm.checked">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<script>
  import {
    startAnimation
  } from '@a/js/login.js';

  export default {

    data() {
      const validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };

      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          // if (this.ruleForm.checkPass !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };

      return {
        ruleForm: {
          userName: '',
          password: '',
          checked: true
        },
        rules: {
          userName: [{
            validator: validateUserName,
            trigger: 'blur'
          }, ],
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],

        }
      }
    },

    mounted() {
      startAnimation()
    },

    methods: {
      submitForm(formName) {
        // 验证是否成功
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // 请求接口  实现登录
            this.$router.push({
              path: '/layout'
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style lang="scss" scoped>
  #particle-canvas {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(10, 10, 50) 0%, rgb(60, 10, 60) 100%);
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
      width: 460px;
      height: 250px;
      border: 1px solid #ccc;
      border-radius: 5px;

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