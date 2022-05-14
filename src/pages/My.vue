<template>
<div>
 <div class="row justify-between">
      <q-input
      class="col"
        outlined
        v-model.lazy="textuser"
        label="用户名"
        placeholder="请输入数字..."
      />
      <q-input
      class="col"
        outlined
        v-model.lazy="textuser"
        label="密码"
        placeholder="请输入密码..."
      />
      <q-input
      class="col"
        outlined
        v-model.lazy="textuser"
        label="确认密码"
        placeholder="请再次输入密码..."
      />
      <q-btn>搜索</q-btn>
    </div>
    
    <div>{{ textuser }}</div>
  </div>
  
</template>

<script>
export default {
  name: 'My',
  data(){
    return{
      textuser:""
    }
  }
}
</script>
