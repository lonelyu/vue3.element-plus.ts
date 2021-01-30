<template>
  <h5>查询</h5>
  <el-form label-width="100px">
    <el-form-item label="查询的表名称" prop="content">
      <el-input v-model="vData.tableName"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="vData.tableData">
    <el-table-column
      v-for="(item, index) in vData.tableItems"
      :key="index"
      :prop="item"
      :label="item"
    >
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import request from "@/request";
import _ from "lodash";

export default defineComponent({
  name: "search-page",
  setup() {
    interface VData {
      tableName: string;
      tableData: object[];
      tableItems: (string | number)[];
    }

    const vData = reactive({
      tableName: "json_data",
      tableData: [],
      tableItems: ["id"]
    }) as VData;

    const search = async () => {
      interface Res {
        code: number;
        data: object[];
        [propName: string]: any;
      }
      const { code, data } = (await request.get("/search", {
        params: { tableName: vData.tableName }
      })) as Res;

      if (code === 200 && data.length) {
        vData.tableItems = _.map(data[0], (i: any, key: string) => key);
        vData.tableData = data;
      }
    };

    return { vData, search };
  }
});
</script>
