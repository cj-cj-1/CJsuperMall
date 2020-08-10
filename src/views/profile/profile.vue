<template>
  <div id="profile">
    <login></login>
    <momey></momey>
    <list></list>
  </div>
</template>

<script>
  import Login from "./childComps/login";
  import Momey from "./childComps/momey";
  import List from "./childComps/list";
  export default {
    name: "profile",
    components: {List, Momey, Login}
  }
</script>

<style scoped>
  #profile{
    background-color: #f3f3f3;
    height: 100vh;
  }
</style>
