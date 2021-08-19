

<template>
  <div class="login">
    <div class="content">
      <el-form :model="userForm" status-icon :rules="rules" ref="userForm" label-width="80px"
        class="form-style demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input prefix-icon="el-icon-user" v-model="userForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="userForm.userPwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="submitForm('userForm')" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="version">
        <span>Copyright 2015-2017 China International Capital Corporation Linitec</span>
      </div>
    </div>

  </div>
</template>

<script>
  // import {
  //   fetchTokenByLogin
  // } from '../../api/login_api.js'

  export default {
    name: "Login",
    data() {
      const validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      const validateUserPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      return {
        userForm: {
          userName: '',
          userPwd: '',
        },

        rules: {
          userName: [{
            validator: validateUserName,
            trigger: 'blur'
          }],
          userPwd: [{
            validator: validateUserPwd,
            trigger: 'blur'
          }]
        }

      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');


            // fetchTokenByLogin(param).then(res => {
            //   console.log(res);
            //   if (res.statusCode == 200) {
            //     sessionStorage.setItem('loginToken', res.data.loginToken )
            //     this.$router.push('/businessClassify');
            //   }
              
            // })

          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
    }

  }
</script>

<style lang="scss" scoped>
  ::v-deep .el-form-item__label {
    color: #fff;
  }

  .login {
    position: relative;
    height: 100%;
    width: 100%;
    background: url('../../assets/images/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .content {
      position: absolute;
      height: 350px;
      width: 500px;
      border: 1px solid #ccc;
      border-radius: 5px;
      top: 50%;
      left: 60%;
      transform: translate(-0%, -50%);
      background: rgb(29 17 17 / 41%);

      .form-style {
        position: absolute;
        width: 90%;
        top: 50%;
        transform: translate(0px, -50%)
      }
    }

    .version {
      position: absolute;
      top: 85%;
      left: 9%;
      font-size: 12px;

      span {
        display: inline-block;
        color: thistle;
        line-height: 30px;
      }
    }
  }
</style>
