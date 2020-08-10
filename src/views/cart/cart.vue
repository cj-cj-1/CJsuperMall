<template>
  <div>
    <nav-bar class="nav">
      <template v-slot:center >
        <div >
          购物车({{cartLength}})
        </div>
      </template>
    </nav-bar>
    <cart-list class="cart-list" :cart-list="cartList" ></cart-list>
    <BottomBar></BottomBar>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childcomps/cartList";
  import BottomBar from "./childcomps/BottomBar";
  export default {
    name: "cart",
    components: {BottomBar, CartList, NavBar},
    computed: {
      cartLength() {
        return this.$store.getters.cartLength
      },
      cartList() {
        return this.$store.getters.cartList
      }
    }
  }
</script>

<style scoped>
.nav{
  background-color: var(--color-tint);
  font-size: 18px;
  color: #fff;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 2;
}
  .cart-list{
    margin-top: 44px;
  }
</style>
