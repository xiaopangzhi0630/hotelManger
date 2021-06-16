<template>
  <div class="app-layout content">
    <!-- <el-card class="box-card"> -->
      <el-image class="fl" style="width: 150px; height: 200px" :src="url" fit="cover"></el-image>
      <div class="fl" style="margin-left: 20px">
        <p><span style="font-weight: 700">账号:</span> {{userName}}</p>
        <p><span style="font-weight: 700">部门:</span> {{userName}}</p>
        <p><span style="font-weight: 700">职位:</span> {{userName}}</p>
        <p><span style="font-weight: 700">权限:</span> {{userName}}</p>
      </div>
    <!-- </el-card> -->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

        userName: localStorage.getItem('userName')
      }
    },
    mounted() {

    },
  }
</script>

<style>
  /* .content {
    display: flex;
    justify-content: center;
  } */

  /* .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  } */

  /* .box-card { */
    /* width: 480px; */
    /* height: 100%; */
  /* } */
</style>