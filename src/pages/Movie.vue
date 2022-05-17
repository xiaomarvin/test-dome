<template>
  <div class="">
    <q-btn-dropdown dense-toggle dense flat label="音乐播放器" class="q-mr-md">
      <q-item v-close-popup to="/home" clickable v-ripple>
        <q-item-section>返回主页</q-item-section>
      </q-item>
      <q-item to="/index" clickable v-ripple>
        <q-item-section>视屏爆发</q-item-section>
      </q-item>
      <q-item to="/imde" clickable v-ripple>
        <q-item-section>Single line item</q-item-section>
      </q-item>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "Movie",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
