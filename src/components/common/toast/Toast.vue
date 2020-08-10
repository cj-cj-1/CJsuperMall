<template>
  <div class="toast" :class="{active: isshow}">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",

    data() {
      return {
        isshow: false,
        message: ''
      }
    },
    methods: {
      show(message, duration = 2000) {
        this.isshow = true;
        this.message = message;
        setTimeout(() => {
          this.isshow = false;
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    display: none;
    width: 200px;
    height: 40px;
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    z-index: 10;
    bottom: 50%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    line-height: 40px;
    color: #fff;


  }
  .active{
    display: block;
  }
</style>
