<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" @click="tabActive(index)" :class="{active: index === activeIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      tabActive(index) {
        this.activeIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
  }
  .tab-control div {
    flex: 1;
    height: 40px;
    line-height: 44px;
    font-size: 14px;
  }
  .active{
    color: var(--color-tint);

  }
  .active span{
    padding: 6px;
    border-bottom: 1px solid var(--color-tint);
  }
</style>
