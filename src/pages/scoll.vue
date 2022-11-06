<template>
  <div class="header">
    <div class="header_tab" ref="headertab">
      <ul ref="tabitem">
        <li
          v-for="(item, index) in listArray"
          :key="index"
          :class="index == current ? 'activeheader' : ''"
          @click="getTab(index, $event)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="header_search">
      <slot name="header_tab_img"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "HeaderTab",
  props: {
    listArray: {
      type: Array,
    },
    current:{
       type:Number,
       default:1,
    }
  },
  data() {
    return {
    };
  },
  methods: {
    getTab(index, e) {
      this.$emit('change',index,e)
    },
  },
};
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 45px;
  background-color: #fff;
  display: flex;
}
.header_tab {
  width: 90%;
  height: 45px;
  display: flex;
  flex-wrap: nowrap;
  // overflow: scroll;
                 // width:400px;
            overflow-x:scoll;
            overflow-y: hidden;
}
.header_tab::-webkit-scrollbar {
  display: none;
}
ul {
  display: inline-block;
  white-space: nowrap;
}
li {
  display: inline-block;
  line-height: 45px;
  padding: 0px 10px;
  font-size: 14px;
  color: #333;
  // 点击高亮某一项时,将原来的字体变大,会导致没有高亮的元素距离上面有空隙,会出现纵向滚动条
  margin-top: -1px;
}
.activeheader {
  font-size: 16px;
  font-weight: 700;
  position: relative;
}
.activeheader:after {
  position: absolute;
  content: "";
  width: 35%;
  height: 2px;
  bottom: 0;
  left: 15px;
  background-color: #333;
  border-radius: 50px;
}
.header_search {
  width: 10%;
  height: 45px;
  position: relative;
}
 
.header_search img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>