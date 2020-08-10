<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @scrollToY="scrollToY" ref="navBar"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad" ref="detail"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
    <back-top @click.native="backToTop" v-if="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/detailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {getDetail, Goods, Shop,GoodsParam} from "network/detail";
  import {debounce} from "../../common/utils";

  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";
  import Toast from "components/common/toast/Toast";








  export default {
    name: "detail",
    components: {
      Toast,
      DetailBottomBar,
      BackTop,
      DetailParamInfo, DetailGoodsInfo, Scroll, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavBar},
    data(){
      return{
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        saveScrollY: [0, 0, 0],
        refresh: null,
        refreshDetail: null,
        isBackTopShow: false,
        message: "添加成功",
        show: true
      }
    },
    created() {
      //1.保存iid
      this.iid = this.$route.params.iid
      //2.请求detail的数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.data.result
        console.log(data)
      //  获取详情页轮播图的图片
        this.topImages = data.itemInfo.topImages

      //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //获取店铺的信息
        this.shop = new Shop(data.shopInfo)
        //获取商品的详情信息
        this.detailInfo = data.detailInfo;

        //获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
    },
    mounted(){
      //刷新scroll,解决滑动的问题
      this.refresh = debounce(this.$refs.scroll.refresh, 300)
       //  图片加载完成后计算参数的位置
      this.refreshDetail = debounce(() => {
        // console.log("kkkkk");
        //这里要减去导航栏的高度44,因为导航栏没有加入滚动的区域,但是获得的offsetTop是包含导航栏的高度的
        this.saveScrollY[1] = this.$refs.detail.$el.offsetTop - 44
        this.saveScrollY[2] = this.$refs.param.$el.offsetTop -44
      }, 300)
    },
    methods:{
      detailImageLoad() {
        //调用了在mounted定义好的防抖函数
        this.refresh()

        this.refreshDetail()

      },
      scrollToY(index){
        this.$refs.scroll.scrollTo(0, -this.saveScrollY[index], 200)
      },
      contentScroll(position) {
        // this.$refs.navBar.titleClick(2)
        if(position.y <= -this.saveScrollY[2]){
          this.$refs.navBar.currentIndex = 2
        }else if(position.y <= -this.saveScrollY[1]){
          this.$refs.navBar.currentIndex = 1
        }else{
          this.$refs.navBar.currentIndex = 0
        }

      //  判断是否显示回到顶部
        if(position.y <= -1000){
          this.isBackTopShow = true
        } else {
          this.isBackTopShow = false
        }
      },
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 200)
      },
      addToCart() {
        // console.log('ddd')
        const product ={}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        product.checked = true
        this.$store.commit("addCart", product)
        this.$toast.show("成功加入购物车", 2000)

      }
    }
  }
</script>

<style scoped>
 .detail{
   position: relative;
   z-index: 9;
   background-color: #fff;
   height: 100vh;
 }
  .detail-nav{
    position: relative;
    background-color: #fff;
    z-index: 10;
  }
  .content{
    /*position: absolute;*/
    height: calc(100% - 44px - 49px);
  }
</style>
