<template>
  <div>
    <el-tooltip effect="dark" content="全屏" placement="bottom">
      <!-- <img @click="screen" class="pointer" :src="require('@/assets/images/screenful.png')" :width="width"
        :height="height"> -->
      <!-- <i class="el-icon-rank" @click="screen"></i> -->
      <img @click="screen" class="pointer" src="../assets/images/screenful1.png" :width="width" :height="height">
    </el-tooltip>
  </div>
</template>

<script>
  import screenfull from 'screenfull';

  export default {
    name: 'screenful',
    components: {},
    props: {
      width: {
        type: Number,
        default: 20
      },
      height: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {
      screen() {
        if (!screenfull.isEnabled) {
          this.$message({
            // message: 'you browser can not work',
            message: '浏览器不能全屏，安装其他版本试试',
            type: 'warning'
          })
          return false
        }
        // 调用 screenfull.toggle() 可以双向切换全屏与非全屏
        screenfull.toggle()
      }
    },
    created() {},
    mounted() {}
  }
</script>

<style lang="scss" scoped>
</style>