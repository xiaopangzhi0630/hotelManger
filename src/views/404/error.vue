<template>
  <div class="main" @click="handleToHome">
    <!-- <img src="/imgs/404/err.jpg" alt=""> -->
  </div>
</template>

<script>
  export default {

    methods: {
      handleToHome() {
        this.$router.push({
          path: '/layout'
        })
      }

    }

  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100vw;
    height: 100vh;
    // display: flex;
    // justify-content: center;
    // align-content: center;\
    background: url('../../../public/imgs/404/err.jpg') no-repeat center;
    background-size: cover;

  }
</style>>