<template>
  <div class="cal">
    <vue-cal
      locale="zh-cn"
      :selected-date="selectedDate"
      sticky-split-labels
      :time-from="0 * 60"
      :time-to="24 * 60"
      :events="select.events"
      :split-days="select.splits"
      hide-view-selector
      hide-title-bar
      :cell-click-hold="false"
      :drag-to-create-event="false"
      aria-disabled="true"
    >
    <!-- 时间格式化 -->
      <template #weekday-heading="{ heading }">
        {{  heading.date.format('M/D') }}
      </template>
      <!-- <template #cell-content="{ events }">
        {{ events }}
      </template> -->
    </vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import "vue-cal/dist/i18n/zh-cn.js";
export default {
  name: "cal",
  components: {
    VueCal,
  },
  data() {
    return {
      selectedDate: new Date(),
      select: {
        splits: [
          { label: "直播室1", split: 1 },
          { label: "直播室2", split: 2 },
        ],
        events: [],
      },
    };
  },
  created() {
    this.initselect();
  },
  methods: {
    initselect() {
      for (let i = 0; i < 5; i++) {
        const day = new Date().addDays(i).format();
        this.select.events.push(
          {
            start: `${day} 00:00`,
            end: `${day} 02:00`,
            title: "NBA",
            content: '<i class="icon material-icons">shopping_cart</i>',
            class: "leisure",
            split: 1,
          },
          {
            start: `${day} 03:00`,
            end: `${day} 06:00`,
            title: "足球",
            content: '<i class="icon material-icons">golf_course</i>',
            class: "sport",
            split: 2,
          },
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cal {
  margin: 0 auto;
  height: 500px;
  width: 1200px;
}
// 隐藏暂无活动
::v-deep .vuecal__no-event {
  display: none;
}
// 隐藏时间线
::v-deep .vuecal__now-line {
  display: none;
}
</style>
