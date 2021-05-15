<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div class="left">

      <div class="aside">
        <div class="logo">
          Bing
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          :collapse="isCollapse" background-color="#003a6c" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>

    </div>

    <div class="right">
      <div class="top">
        <div class="bg" @click="isShowMenu">
          <i :class="!isCollapse? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>

        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#003a6c" text-color="#fff" active-text-color="#ffd04b" style="height: 100%;">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>



      </div>
      <div class="nav"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex2: '',

        openMenuStyle: {
          // height: '100vh',
          width: '230px'
        },
        closeMenuStlye: {
          //  height: '100vh',
        }

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect() {},

      // 菜单栏展开与收缩
      isShowMenu() {
        if (!this.isCollapse) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    display: flex;

    // 左侧
    .left {
      // width: 230px;
      background: #003a6c;
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
        margin: 0 auto;
        box-sizing: border-box;
      }

      .aside {
        height: calc(100vh - 60px);
        padding-top: 10px;

        // 折叠菜单关键代码, 样式
        .el-menu-vertical-demo:not(.el-menu--collapse) {
          width: 230px;
          min-height: 400px;
          height: 100%;
        }

        .el-menu {
          border-right: solid 1px transparent;
        }
      }

    }

    // 右侧
    .right {
      flex: 1;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #003a6c;
        height: 60px;
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
    }

  }
</style>