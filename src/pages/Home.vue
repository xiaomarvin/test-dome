<template>
  <div class="">
    <q-toolbar class="bg-primary text-white">
      <q-avatar size="50px" square>
        <img src="../assets/img/home.png" />
      </q-avatar>
      <q-space />
      <q-btn
        @click="drawerRight = true"
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
      />
      <q-btn>bob1</q-btn>

      <!-- 侧边栏 start -->
      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
      </q-drawer>
      <!-- 侧边栏 end -->
    </q-toolbar>
    <div class="row justify-between">
      <q-input
        class="col"
        outlined
        v-model.lazy="textuser"
        label="用户名"
        placeholder="请输入数字..."
      />
      <q-btn>搜索</q-btn>
    </div>

    <div>{{ textuser }}</div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      drawerRight: false,
      textuser: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
</style>
