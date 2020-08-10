<template>
  <div id="money">
    <div class="item">
      <span class="stress">0.00</span>
      <span>元</span>
      <div>我的余额</div>
    </div>
    <div class="item">
      <span class="stress">0</span>
      <span>个</span>
      <div>我的优惠</div>
    </div>
    <div class="item">
      <span class="stress">0</span>
      <span>分</span>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "momey"
  }
</script>

<style scoped>
  #money{
    display: flex;
    height: 80px;
    background-color: #fff;
  }
  .item{
    flex:1;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  .item:nth-last-child(1){
    border-right: none;
  }
  .stress{
    color: #e66955;
    font-size: 25px;
    font-weight: bold;
  }
  .item div{
    padding: 5px;
  }
</style>
