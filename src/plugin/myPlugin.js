import {
  get,
  post
} from '../utils/request'

// 自定义插件

export default {
  // 插件中必须包含一个install方法
  install: function (Vue) {
    // 给vue混入成员
    Vue.mixin({
      methods: {
        // 请求方法
        $get(url, params) {
          // console.log(234, url);
          return get(url, params)
        },
        $post(url, params) {
          return post(url, params)
        },

        // 提示消息
        $msg_s(message, duration = 2000) {
          this.$message({
            showClose: true,
            message,
            type: 'success'
          });
        },

        $msg_e(message, duration = 2000) {
          this.$message({
            showClose: true,
            message,
            type: 'error'
          });
        },

        $msg_w(message, duration = 2000) {
          this.$message({
            showClose: true,
            message,
            type: 'warning'
          });
        }

        //-------------


      }

    })
  }
}