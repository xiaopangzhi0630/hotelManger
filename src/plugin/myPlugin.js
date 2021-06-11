import {
  get,
  post
} from '../plugin/myPlugin'

// 自定义插件

export default {
  // 插件中必须包含一个install方法
  install: function (Vue) {
    // 给vue混入成员
    Vue.mixin({
      methods: {
        // 请求方法
        $get(url, params) {
          return get(url, params)
        },
        $post(url, params) {
          return post(url, params)
        },

        // 提示消息
        $msg_success(message, duration = 2000) {
          this.$message({
            showClose: true,
            message,
            type: 'success'
          });
        },

        $msg_error(message, duration = 2000) {
          this.$message({
            showClose: true,
            message,
            type: 'error'
          });
        },

        $msg_warning(message, duration = 2000) {
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