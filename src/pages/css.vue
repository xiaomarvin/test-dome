<template>
  <div class="content">
    2222
    <div>
        <span>旋转按钮</span>
        <span @click="btnrotate" >
            <q-icon class="ddd"  :class="{iconrotate:isrotate}" size="lg" name="bi-arrow-clockwise"></q-icon>
        </span>
    </div>
  </div>
</template>
  <script>
export default {
  name: "CSS",
  components: {},
  props: {},
  data() {
    return {
        isrotate: false,
    };
  },
  watch: {},
  created() {},
  methods: {
    btnrotate(){
        this.isrotate = true;
        this.btnro()
    },
    btnro(){
      setTimeout(()=>{
        this.isrotate = false;
      },2000)
    }
  },
};
</script>
    
<style scoped lang="scss">
.content{
    width: 300px;
    height: 300px;
    font-size:30px;
    .iconrotate{
        animation: rotate 2s forwards;
    }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
    