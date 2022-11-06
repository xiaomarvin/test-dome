<template>
  <div class="conter">
    <div class="right_float" ref="right_float">
         <ul class="right_float_content">
             <div class="beauty">
                  <a href="">
                 </a>
             </div>
             <li>
                 <a href="">
                     <p>在线客服</p>
                 </a>
             </li>
             <li class="box2">
                 <p>免费开户</p>
             </li>
             <li class="box3">
                 <p>优惠活动</p>
             </li>
         </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "right_float",
    data(){
        return{
            //  topList2:[
            //     {name:this.$fun.langText('app.common_header_kefu'),class:'bg22',path:'activity_index'}, //客服
            //     {name:'免费开户',class:'bg23',path:'activity_index'}, //免费开户
            //     {name:this.$fun.langText('app.common_header_active'),class:'bg21',path:'activity_index'}, //优惠

            // ],
             box : null,
             timer : null,
             speed0:0
        }
    },

    methods:{
        toMove(obj, speed, location) {
            clearInterval(this.timer)
            this.timer = setInterval(function () {
                if (obj.offsetTop == location) {
                    this.speed0 = 0
                    clearInterval(this.timer)
                } else {
                    if (location - obj.offsetTop > 0) {
                        this.speed0 = Math.ceil(speed * (location - obj.offsetTop) / 100)
                        //如果大于0用ceil，小于0用floor,保证speed0不会在到达之前变为0
                    } else {
                        this.speed0 = Math.floor(speed * (location - obj.offsetTop) / 100)
                    }
                    obj.style.top = (obj.offsetTop + this.speed0) + "px"
                }
            }, 10)
        } ,

         scrollright() {
            let location = document.documentElement.scrollTop + (document.documentElement.clientHeight - this.box.offsetHeight) / 2
            //页面滚动的距离+可视区的高度-本身的高度 除以2
            location = parseInt(location) //取整防止出现小数
            this.toMove(this.box, 15, location)  //输入合适的速度达到效果
        }
    },

    mounted(){
         this.box = this.$refs.right_float
         document.addEventListener("scroll",this.scrollright)
    },

    destroyed(){
      if(this.timer){
        clearInterval(this.timer)
      }
      document.removeEventListener("scroll",this.scrollright)
    }
}
</script>

<style lang="scss" scoped>
.conter{
  height: 3000px;
 .right_float{
        position: absolute;
        right: 5px;
        z-index: 999;
        top: 50px;
       .right_float_content{
            background: linear-gradient(#fff, #C8DAFF);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100px;
            border-radius: 5px 0 0 5px;
            cursor: pointer;
           .beauty{
              position: absolute;
              top: -8px;
              z-index: -1;
            }
            li{
                align-items: center;
                height: 80px;
                width: 100px;
                text-align: center;
                display: block;
                border-bottom: 2px solid #fff;
                display: flex;
                justify-content: center;
                flex-direction: column;
                p{
                    color: #8D9094;
                    margin-top: 5px;
                    font-size: 12px;
                }
                &:last-child {
                    border-bottom: none;
                }
            }
    }
}
}
</style>
