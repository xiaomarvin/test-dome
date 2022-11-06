<template>
    <div class="content">
        <div>
            <span>数据源：</span>
            <span style="color:red;">"1080:https://www.baidu.com,480:http://www.mi.com,1080:http://www.cn.com,480:null"</span>
        </div>
        </br>
      <div v-for="(item,index) in computed_row(pulllist) " :key="index">
        {{item.pc}}
        {{item.h5}}
      </div>
      <span style="color:red">=========================</span>
      <div v-for="(item,index) in computd_cel(pulllist)" :key="index">
        <!-- {{item}} -->
      <div >
        <span> {{Object.keys(item)[0] }}</span>
       <span>  {{item[Object.keys(item)[0]]  }}</span>
      
      </div> 
    </div>
 
    </div>
  </template>
  <script>
export default {
  name: "select",
  components: {},
  props: {},
  data() {
    return {
      pulllist: {
        push: "1080:https://www.baidu.com,480:http://www.mi.com,1080:http://www.cn.com,480:null",
      },
    };
  },
  watch: {},
  created() {},
  methods: {
    computed_row(data) {
      let leee = [];
      let liste = data.push.split(",");
      liste.forEach((item) => {
        if (item.startsWith("1080:")) {
          if (item.slice(4) !== "null") {
            leee.push({
              pc: item.slice(0, 5),
              h5: item.slice(5),
            });
          }
        } else if (item.startsWith("480:")) {
          if (item.slice(4) !== "null") {
            leee.push({
              pc: item.slice(0, 4),
              h5: item.slice(4),
            });
          }
        }
      });
      //  console.log(leee)
      return leee;
    },
    computd_cel(list) {
      console.log(list);
      let newList = [];
      const listArr = list.push.split(",");
      listArr.forEach((item, i) => {
        console.log(item);
        const index = item.indexOf(":") + 1;
        if (item.substr(index) !== "null") {
          const obj = {
            [item.substr(0, index)]: item.substr(index),
          };
          newList.push(obj);
        }
      });
      return newList;
    },
  },
};
</script>
    
  <style scoped lang="scss">
//   .selecthome {
//     display: flex;
//   }
//   .content {
//     display: inline-block;
//   }
</style>
    