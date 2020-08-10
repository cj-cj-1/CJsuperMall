<template>
  <nav-bar>
    <template v-slot:left>
      <div @click="backTo">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item, index) in titles" class="titleTtem" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return{
        titles: ['商品','详情', '参数'],
        currentIndex: 0
      }
    },
    methods: {
      backTo() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('scrollToY', index)
      }
    }
  }
</script>

<style scoped>
 .title{
   display: flex;
   font-size: 14px;
 }
  .titleTtem{
    flex:1;
  }
  .back{
    padding-top: 10px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
