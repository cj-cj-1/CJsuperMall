<template>
  <div id="listitem">
    <div ><slot name="first" ></slot></div>
    <div ><slot name="second"></slot></div>
    <div ><slot name="third"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "listitem"
  }
</script>

<style scoped>
  #listitem{
    color: #222222;
    font-size: 18px;
    background-color: #fff;
    margin: 10px 0;
  }

</style>
