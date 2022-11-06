<template>
  <div class="container">
    <section class="theme-list">
  <div class="fixed-nav" ref="fixednav">
    <div class="fixed-nav-content">
      <p
        v-for="(item, index) in theme"
        :key="index"
        :class="['tab-title', activeId === index && 'select-tab']"
        @click="changeTab(index, $event)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</section>
  </div>
</template>

<script>
export default {
  name: "test",
  components: {},
  props: {},
  data() {
    return {
        theme: ['CSDN博客', '博客园', '高考加油', '中考加油', '小欢喜', '七十周年','CSDN博客', '博客园', '高考加油', '中考加油', '小欢喜', '七十周年'],
activeId: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    changeTab(id, event) {
  // 如果选择的和当前激活的不同
  if (id !== this.activeId) {
    this.activeId = id;
    // 计算当前按钮的位置，看是否需要移动
    const spanLeft = event.clientX; // 当前点击的元素左边距离
    const divBox = document.querySelector(".select-tab").clientWidth / 2; // 点击的元素一半宽度
    const totalWidths = document.body.clientWidth; // 屏幕总宽度
    const widths = totalWidths / 2; // 一半的屏幕宽度
    const spanRight = totalWidths - spanLeft; // 元素的右边距离
    const scrollBox = document.querySelector(".fixed-nav"); // 获取最外层的元素
    const scrollL = scrollBox.scrollLeft; // 滚动条滚动的距离
    // 当元素左边距离 或者 右边距离小于100时进行滑动
    if (spanRight < 100 || spanLeft < 100) {
      scrollBox.scrollLeft = scrollL + (spanLeft - widths) + divBox;
    }
  }
}
  },
};
</script>

<style scoped lang="scss">
.container {
  width:400px;
}
.theme-list {
  margin-top: 20px;
}
.fixed-nav {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
.fixed-nav-content {
  display: flex;
}
.tab-title {
  padding: 0 13px;
  margin-right: 12px;
  color: #141414;
  border-radius: 13px;
  font-size: 14px;
  flex-shrink: 0;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 0.01rem;
  opacity: 0;
  display: none;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  background-color: #fff;
  opacity: 0;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  width: 0.01rem;
  border-radius: 0.01rem;
  opacity: 0;
}
.select-tab{
    background:red;
}
</style>
