
import{get , post} from '../plugin/myPlugin'

// 自定义插件

export default {
  // 插件中必须包含一个install方法
  install: function(Vue) {
      // 给vue混入成员
    Vue.mixin({
      methods: {
        $get(url, params) {
          return get(url, params)
        },
        $post(url, params) {
          return post(url, params)
        },


      }

    })
  }
}