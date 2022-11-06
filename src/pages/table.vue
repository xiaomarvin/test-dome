<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">新增主播</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>
     <q-separator inset  />
    <div class="q-pa-md">
      <q-markup-table flat bordered>
        <thead>
          <tr>
            <th class="text-left"></th>
            <th class="text-right">中文</th>
            <th class="text-right">繁体</th>
            <th class="text-right">英文</th>
            <th class="text-right">越南语</th>
            <th class="text-right">泰语</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">主播昵称</td>
            <td class="text-right">159</td>
            <td class="text-right">6</td>
            <td class="text-right">24</td>
            <td class="text-right">4</td>
            <td class="text-right">87</td>
          </tr>
          <tr>
            <td class="text-left">主播标签</td>
            <td class="text-right">237</td>
            <td class="text-right">9</td>
            <td class="text-right">37</td>
            <td class="text-right">4.3</td>
            <td class="text-right">129</td>
          </tr>
          <tr>
            <td class="text-left">擅长爱好</td>
            <td class="text-right">262</td>
            <td class="text-right">16</td>
            <td class="text-right">23</td>
            <td class="text-right">6</td>
            <td class="text-right">337</td>
          </tr>
          <tr
        </tbody>
      </q-markup-table>
    </div>
  </q-card>

</template>

<script>
export default {
  name:'Table',
  props:{
    table_list:{
      type:Object,
      default:()=>{}
    }
  },
  data(){
    return{
      
    }
  },
  created(){
    console.log('===table_list===>>>',this.table_list)
  },
  methods:{
    
  }
}
</script>

<style>
</style>
