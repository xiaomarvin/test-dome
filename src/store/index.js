import Vue from 'vue'
import Vuex from 'vuex'
import 'ant-design-vue/dist/antd.css'; 


Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
    },
    strict: process.env.DEBUGGING
  })
  return Store
}
