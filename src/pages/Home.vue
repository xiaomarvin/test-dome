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
      <q-btn>bob2</q-btn>
      <q-btn>bob1</q-btn>
      <q-btn>按钮</q-btn>
      <q-btn>按钮4</q-btn>
      <q-btn>按钮二</q-btn>
      <q-btn>按钮三</q-btn>
      <q-btn>按钮五</q-btn>
      <q-btn>按钮六</q-btn>
      <q-btn>按钮六master</q-btn>
      <q-btn>按钮七</q-btn>
      <q-btn>按钮8-mark</q-btn>
      <q-btn>按钮-7-bob</q-btn>
      <!-- 侧边栏 start -->
      <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
        class="box"
      >
        <q-tabs class="bg-red" style="max-width: 200px">
          <q-route-tab icon="mail" to="/" exact />
          <q-route-tab icon="alarm" to="/" exact />
        </q-tabs>
        <q-list dark dense bordered padding class="rounded-borders text-center">
          <q-item to="/alarm" clickable v-ripple>
            <q-item-section> Item </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Item </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section> Item </q-item-section>
          </q-item>
        </q-list>
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
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-end; */
  align-items: center;
  /* justify-content: space-between; */
}
</style>
