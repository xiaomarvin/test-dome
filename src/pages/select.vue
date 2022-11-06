<template>
  <div class="content">
    <div v-for="(item,index) in tabledata" :key="index">
      <span v-html="computed_row_content(item)"></span>
    </div>
  </div>
</template>
<script>
import {highLight} from '../utils/highLight.js'
export default {
  name: "select",
  components: {},
  props: {},
  data() {
    return {
      // 消息体
      tabledata: [
        {
          time: 1662792660260,
          id: 9,
          name: "mark",
          content:
            "这A-Za-z0-9-_.!~*'()些a-z视A-Z图!09@98不仅-90从菜*单栏+微信dd.进(ssw)行中-9隐藏，+q而且进_e行完-90全禁用，即使从单-90元格导航+q和标题栏单击时也是如此。",
          regtext: "!09@98,-90,+q,进行,+微信,-9,_e,(ssw),dd.进,a-z,菜*单,A-Za-z0-9-_.!~*'(),A-Z",
          // A-Z a-z 0-9 - _ . ! ~ * ' ( )
        },
        // {
        //   time: 1662792660260,
        //   id: 9,
        //   name: "mark",
        //   content: "{\"nameid\":"34",\"match\":\"皇马V巴萨\",\"zhudanhao\":\"12341234\",\"time\":\"1663432728823\"}",
        //   regtext: "234,88",
        // }
      ],
      pulllist:[{
          pull:"1080:https://www.baidu.com,480:http://www.mi.com,1080:http://www.cn.com"
        }],
      isflig:1,
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    init(){
      console.log('===init()了===了')
    },
    // 敏感词高亮格式化
    computed_row_content(data) {
      const { content, regtext } = data;
      // 敏感词为空，不过滤
      if(regtext == ""){
        return content
      }
      try {
        console.log('====try()',this.isflig)
        if(this.isflig >1 && this.isflig< 5){
          this.init()
          console.log('执行了init（）')
        }
        let testlist = regtext.split(',')
        let contenttest =  (content)
        testlist.forEach((item)=>{
          console.log('item',item);  
            contenttest = contenttest.replaceAll(item,`<span style='color:red;'>${item}</span>`);
        })
        return Object.freeze(contenttest) 
      } catch (error) {
        if(this.isflig< 5){
          this.isflig+=1
        }
        console.log('===err===',error,this.isflig)
      }
    },
  },
};
</script>
  
<style scoped lang="scss">
.selecthome {
  display: flex;
}
.content {
  display: inline-block;
}
</style>
  