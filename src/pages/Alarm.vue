<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-blue-1 text-black">
      <q-toolbar class="box">
        <q-toolbar-title class="">
          <div class="imglogo">
            <img src="~src/assets/img/welcome.png" />
          </div>
        </q-toolbar-title>
        <q-tabs align="left">
          <q-btn-dropdown
            dense-toggle
            dense
            flat
            label="Page One"
            class="q-mr-md"
            :aria-hidden="false"
            expanded-icon="bi-chevron-compact-down"
          >
            <q-list>
              <q-item v-close-popup to="/home" clickable v-ripple>
                <q-item-section>返回主页</q-item-section>
              </q-item>
              <q-item to="/index" clickable v-ripple>
                <q-item-section>视屏爆发</q-item-section>
              </q-item>
              <q-item to="/imde" clickable v-ripple>
                <q-item-section>Single line item</q-item-section> </q-item
              ><q-item to="/imde" clickable v-ripple>
                <q-item-section>Single line item</q-item-section> </q-item
              ><q-item to="/imde" clickable v-ripple>
                <q-item-section>二二所多所所多</q-item-section>
              </q-item>
              <q-item to="/imde" clickable v-ripple>
                <q-item-section>诶搜到星空</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown
            dense-toggle
            dense
            flat
            label="视屏切换"
            class="q-mr-md"
          >
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

          <q-btn-dropdown
            dense-toggle
            dense
            flat
            label="音乐播放器"
            class="q-mr-md"
          >
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

          <q-item to="/page2" dense flat clickable v-ripple>
            <q-item-section>Page Two</q-item-section>
          </q-item>
          <q-item to="/page2" dense flat clickable v-ripple>
            <q-item-section>Page Two</q-item-section>
          </q-item>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.box {
  /* width: 800px; */
  height: 100px;
  /* display: flex; */
  min-width: 400px;
  max-width: 1000px;
  /* justify-content: center; */
  /* align-items: center; */
  margin: 0 auto;
}
.imglogo img {
  width: 250px;
}
</style>
