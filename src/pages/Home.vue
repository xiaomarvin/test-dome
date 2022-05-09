<template>
  <div class="">
    <q-toolbar class="bg-primary text-white">
      <q-avatar
        size="50px"
        square
      >
        <img src="../assets/img/home.png">
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
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div
              v-for="n in 50"
              :key="n"
            >Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>
      <!-- 侧边栏 end -->
    </q-toolbar>
  </div>
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      drawerRight: false
    };
  },
  methods: {
  }
};
</script>

<style scoped>
</style>