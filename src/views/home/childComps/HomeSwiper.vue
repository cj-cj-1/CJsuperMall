<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index";

  export default {
    name: "HomeSwiper",
    data(){
      return {
        isLoad: true
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    props:{
      banners: {
        type:Array,
        default: []
      }
    },
    methods: {
      swiperLoad() {
        if(this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = false
        }

      }
    }
  }
</script>

<style scoped>

</style>
