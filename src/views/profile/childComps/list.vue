<template>
  <div>
    <listitem>
      <template v-slot:first><div class="item">我的消息</div></template>
      <template v-slot:second><div class="item">积分商城</div></template>
      <template v-slot:third><div class="item">会员卡</div></template>
    </listitem>
    <listitem>
      <template v-slot:first><div class="item">我的购物车</div></template>
      <template v-slot:second><div class="item">下载APP</div></template>
    </listitem>
    <listitem>
      <template v-slot:first><div class="item">设置</div></template>
      <template v-slot:second><div class="item">更多</div></template>
    </listitem>
  </div>


</template>

<script>
  import Listitem from "./listitem";
  export default {
    name: "list",
    components: {Listitem}
  }
</script>

<style scoped>
  .item{
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
  }

</style>
