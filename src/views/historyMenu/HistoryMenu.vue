<template>
  <div>
    <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)"
      @click="handleHistoryMenu">
      {{tag}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    naem: 'historyMenu',
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
      }
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
    }

  }
</script>

<style>

</style>