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
            <el-menu-item index="/layout/role" @click="handleName('角色管理')">角色管理</el-menu-item>
            <el-menu-item index="/layout/account" @click="handleName('账号管理')">账号管理</el-menu-item>
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
            <el-menu-item index="/layout/userManager">人员管理</el-menu-item>
            <el-menu-item index="/layout/sortable">sortable</el-menu-item>
            <el-menu-item index="/layout/tableTest">测试</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Element测试</span>
            </template>
            <el-menu-item index="/layout/tableMerge">table合并测试</el-menu-item>
            <el-menu-item index="/layout/toolTips">toolTip合并测试</el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Login效果图</span>
            </template>
            <el-menu-item index="/layout/userManagerFront">风险管理</el-menu-item>
            <el-menu-item index="/layout/business">同一业务</el-menu-item>
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
              <span slot="title">{{userName}}</span>
            </template>
            <el-menu-item index="/layout/mine">个人中心</el-menu-item>
            <el-menu-item index="/layout/resetPwd">修改密码</el-menu-item>
            <el-menu-item @click="handleSignOut">退出系统</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div class="nav">
        <!-- 222 -->

        <!-- <div class="nav"> -->
        <!-- 历史菜单位置 -->
        <!-- <div>
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)"
            @click="handleHistoryMenu">
            {{tag}}
          </el-tag>
        </div> -->
        <!-- <history-menu></history-menu> -->
        <!-- <transition name="fade-transform" mode="out-in"> -->
        <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive" :key="1" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="1" /> -->
        <!-- <router-view /> -->
        <!-- <keep-alive include="account">
        </keep-alive> -->
        <!-- </div> -->
        <!-- </transition> -->
        <!-- <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
        </transition>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition> -->



        <!-- <transition-group name="fade-transform" mode="out-in" :key="1">
          <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
          </keep-alive>
        </transition-group>
        <transition name="fade-transform" mode="out-in" >
          <router-view v-if="!this.$route.meta.keepAlive"></router-view>
        </transition> -->

        <!-- 没有动画效果 -->
        <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" /> -->

        <!-- 页面渐入渐出, 但是没有缓存 -->
        <!-- <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition> -->

        <!-- 页面渐入渐出, 有缓存 -->
        <!-- <transition-group name="fade-transform" mode="out-in">
          <keep-alive key="keep-alive">
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" key="not-keep-alive" />
        </transition-group> -->
        <!-- <transition-group name="fade-transform">
          <div key="keep-alive" v-if="$route.meta.keepAlive">
            <keep-alive key="keep-alive">
              <router-view class="router-view"></router-view>
            </keep-alive>
          </div>
          <router-view class="router-view" v-if="!$route.meta.keepAlive" key="not-keep-alive"></router-view>
        </transition-group> -->
        
        <!-- <transition name="fade-transform" mode="out-in"> -->
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :key="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </transition>
        <transition name="fade-transform" mode="out-in">
          <router-view v-if="!$route.meta.keepAlive" :key="!$route.meta.keepAlive"></router-view>
        </transition>

        <!-- <transition name="fade-transform">
          <keep-alive>
            <router-view v-if="$route.meta.alive"></router-view>
          </keep-alive>
        </transition>
        <transition name="fade-transform">
          <router-view v-if="!$route.meta.alive"></router-view>
        </transition> -->

        <!-- <transition-group>
          <transition name="fade-transform" key='0'>
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />=
            </keep-alive>
          </transition>
          <transition name="fade-transform" key='1'>
            <router-view v-if="!this.$route.meta.keepAlive" key='1' />
          </transition>
        </transition-group> -->

      </div>




    </div>


  </div>

</template>

<script>
  // 导入vuex的映射函数
  import {
    mapState
  } from "vuex";

  import HistoryMenu from '../historyMenu/HistoryMenu.vue';

  export default {
    data() {
      return {

        isCollapse: false,
        userName: '',
        currentActiveMenu: sessionStorage.getItem("defaultMenu") || "",
        themeColor: localStorage.getItem("theme") || "#003a6c",


        // dynamicTags: ['标签一', '标签二', '标签三'],
        // inputVisible: false,
        // inputValue: ''

      };
    },

    computed: {
      ...mapState("theme", ["theme"]),
    },

    components: {
      HistoryMenu
    },

    mounted() {
      // console.log(this.theme);
      // console.log(localStorage.getItem('userName'));
      this.userName = localStorage.getItem('userName')

    },

    methods: {
      handleHistoryMenu() {
        console.log(12312)

      },
      handleName(val) {
        console.log(val);
      },

      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },


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

        console.log('route', this.$route);
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
  // .el-tag+.el-tag {
  //   margin-left: 10px;
  // }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  //  =============


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
        // padding: 15px;
        height: calc(100vh - 60px);
        // background: rgb(1245, 242, 235);
 
        overflow: auto;
      }
    }
  }
</style>