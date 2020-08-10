<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center >购物街</template>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="tabControl1" v-show="isShowTab">
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pullUpLoad="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="back-top" @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {debounce} from "../../common/utils";


  export default {
    name: "home",
    components: {
      BackTop,
      Scroll,
      GoodsList,
      TabControl,
      FeatureView,
      RecommendView,
      HomeSwiper,
      NavBar,
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: 'pop',
        type: ['pop', 'new', 'sell'],
        isShow: false,
        tabOffsetTop: 0,
        isShowTab: false,
        saveY: 0
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()

      //2.请求商品的数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted(){
      //监听图片是否加载完成
      const refresh = debounce(this.$refs.scroll&&this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })

    },
    activated() {
      // console.log("----");
      // console.log(this.saveY);
      this.$refs.scroll.scrollTo(0, this.saveY, 200)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY);
    },
    methods: {
      //自定义事件
      tabClick(index) {
        this.currentType = this.type[index];
        this.$refs.tabControl1.activeIndex = index
        this.$refs.tabControl2.activeIndex = index
      },

      backClick() {
        this.$refs.scroll.scrollTo(0,0,300)
      },

      contentScroll(position) {
        // console.log(position);
        this.isShow = position.y < -1000
        this.isShowTab = position.y < -this.tabOffsetTop
      },

      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad() {
        // console.log("----")
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },


      //网络请求
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          //console.log(res);
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
            this.goods[type].page++;
          //结束一次上拉加载更多
             this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>


  .home-nav {
    color: #fff;
    background-color: var(--color-tint);
  }

  .tab-control{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }


</style>
