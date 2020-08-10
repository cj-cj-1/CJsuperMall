<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",

  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 5px;
    bottom: 55px;
    z-index: 15;
  }
  .back-top img {
    width: 50px;
    height: 50px;
  }
</style>
