<template>
  <q-layout
    container
    class="homebox"
  >
    <router-view />
    <q-footer>
      <q-toolbar>
        <q-tabs
          v-model="tab"
          narrow-indicator
          no-caps
          class="row col"
          active-color="white"
        >
          <q-route-tab
            name="home"
            label="首页"
            to="/"
          />
          <q-route-tab
            name="alarm"
            label="游戏"
            to="alarm"
          />
          <q-route-tab
            name="movie"
            label="视频"
            to="movie"
          />
          <q-route-tab
            name="my"
            label="我的"
            to="my"
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>
    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
  </q-layout>
</template>
<script>
export default {
  name: "MainLayout",
  components: {},
  data () {
    return {
      tab: "home"
    };
  },
  methods: {

  },
};
</script>
<style scoped>
.homebox {
  width: 100%;
  height: 100vh;
}
.homePage {
  display: flex;
  align-items: flex-end;
}
.layoutcont {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
