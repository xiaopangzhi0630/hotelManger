<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div class="left" :style="{ backgroundColor: themeColor }">
      <div class="aside">
        <div class="logo">Bing</div>
        <el-menu :default-active="currentActiveMenu" @select="changeActiveMenu" class="el-menu-vertical-demo"
          :collapse="isCollapse" router unique-opened :background-color="themeColor" text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="/layout/role">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item index="/layout/role">角色管理</el-menu-item>
            <el-menu-item index="/layout/account">账号管理</el-menu-item>
            <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">客房管理</span>
            </template>
            <!-- <el-menu-item index="/layout/roomTest">打开测试</el-menu-item> -->
            <el-menu-item index="/layout/roomType">客房类型</el-menu-item>
            <el-menu-item index="/layout/roomManager">客房管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span slot="title">客户管理</span>
            </template>
            <el-menu-item index="/layout/guestList">客户管理</el-menu-item>
            <!-- <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item> -->
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">权限管理</span>
            </template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <!-- 右侧导航 -->
    <div class="right">
      <div class="top" :style="{ backgroundColor: themeColor }">
        <div class="bg" @click="isShowMenu">
          <i :class="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>

        <el-menu class="el-menu-demo" mode="horizontal" :background-color="themeColor" text-color="#fff" router
          active-text-color="#ffd04b" style="min-width: 640px">
          <el-menu-item index="/layout"><i class="el-icon-s-home"></i>Home</el-menu-item>
          <el-menu-item index="/layout/message"><i class="el-icon-s-comment"></i>Message</el-menu-item>
          <el-menu-item index="/layout/email"><i class="el-icon-message"></i>Email</el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-help"></i>
              <span slot="title">Theme</span>
            </template>
            <el-menu-item v-for="(item, i) in theme" :key="i" @click="handleChangeTheme(item.value)">{{ item.name }}
            </el-menu-item>
            <!-- <el-menu-item index="4-2">灰色主题</el-menu-item>
            <el-menu-item index="4-5">绿色主题</el-menu-item> -->
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span slot="title">管理员</span>
            </template>
            <el-menu-item index="/layout/mine">个人中心</el-menu-item>
            <el-menu-item index="/layout/resetPwd">修改密码</el-menu-item>
            <el-menu-item @click="handleSignOut">退出系统</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="nav">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入vuex的映射函数
  import {
    mapState
  } from "vuex";

  export default {
    data() {
      return {
        isCollapse: false,
        currentActiveMenu: sessionStorage.getItem("defaultMenu") || "",
        themeColor: localStorage.getItem("theme") || "#003a6c",
      };
    },

    computed: {
      ...mapState("theme", ["theme"]),
    },

    mounted() {
      // console.log(this.theme);
    },

    methods: {
      // 退出登录
      handleSignOut() {
        localStorage.clear();
        sessionStorage.clear();

        this.$router.push({
          path: "/login",
        });
        this.$msg_s('退出成功！')
      },
      // 菜单缓存
      changeActiveMenu(indexPath) {
        console.log(indexPath);
        sessionStorage.setItem("defaultMenu", indexPath);
      },
      // 改变颜色
      handleChangeTheme(color) {
        this.themeColor = color;
        localStorage.setItem("theme", color);
      },

      // 菜单栏展开与收缩
      isShowMenu() {
        if (!this.isCollapse) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    height: 100vh;
    display: flex;

    // 左侧
    .left {
      // width: 230px;
      // background: #003a6c;
      // height: calc(100vh -30px);
      height: 100vh;
      overflow: auto;

      .logo {
        width: 90%;
        font-size: 18px;
        color: cornsilk;
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      .aside {
        // height: calc(100vh - 60px);
        padding-top: 10px;

        // 折叠菜单关键代码, 样式
        .el-menu-vertical-demo:not(.el-menu--collapse) {
          width: 230px;
          min-height: 400px;
          // height: 100%;
        }

        .el-menu {
          border-right: solid 1px transparent;
        }
      }
    }

    // 右侧
    .right {
      flex: 1;
      // height: calc(100vh -60px);
      height: 100%;
      width: calc(100vw - 235px);

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #003a6c;
        height: 60px;
        padding-right: 20px;
        box-sizing: border-box;
      }

      .bg {
        position: relative;
        margin-left: 30px;

        i {
          position: absolute;
          height: 25px;
          width: 25px;
          color: white;
          font-size: 22px;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }

      .bg>i:hover {
        color: #003a6c;
        background-color: #ece5e5fa;
      }

      .nav {
        padding: 15px;
        height: calc(100vh - 90px);
        background: rgb(245, 242, 235);
      }
    }
  }
</style>