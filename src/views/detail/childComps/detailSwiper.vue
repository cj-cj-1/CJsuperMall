<template>
  <div class="detail-swiper">
    <swiper class="swiper-item">
      <swiper-item v-for="item in topImages" >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index";
  export default {
    name: "detailSwiper",
    props:{
      topImages: {
        type:Array,
        default: []
      }
    },
    components: {Swiper, SwiperItem}
  }
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}

</style>
