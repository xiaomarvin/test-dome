<template>
  <div class="header">
    <div>wwwww</div>
    <a-table
      :columns="columns"
      :row-key="(record) => record.login.uuid"
      :data-source="dataSource"
    >
      <template slot-scope="record"></template>
    </a-table>
  </div>
</template>

<script>
import {tab} from "./config/config.js"
export default {
  name: "HeaderTab",
  data() {
    return {
      columns: tab,
      dataSource: [
        {
          key: "1",
          name: "John Brown",
          money: "￥300,000.00",
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          money: "￥1,256,000.00",
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          money: "￥120,000.00",
          address: "Sidney No. 1 Lake Park",
        },
      ],
    };
  },
  methods: {
    getTab(index, e) {
      console.log("===index===", index, e);
    },
  },
};
</script>
  <style lang="scss">
</style>