<template>
  <div id="pro">
    <div class="title">超级商城</div>
    <div class="login">
      <img src="~assets/img/profile/login.jpg" alt="">
      <div class="phone">
        <div>登录/注册</div>
        <div>您未登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>
  #pro{
    background-color: #fe869b;
    height: 140px;
  }
  .title{
    color: #fff;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
  }
  .login{
    display: flex;
    padding-left: 20px;
    align-items: center;

  }
  .login img{
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .phone{
    flex: 1;
    color: #fff;
    font-size: 20px;
    padding-left: 20px;
  }
</style>
