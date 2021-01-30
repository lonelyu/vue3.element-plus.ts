<template>
  <div>
    <h5>查询</h5>
    <el-form label-width="100px">
      <el-form-item label="查询的表名称" prop="content">
        <el-input v-model="data.tableName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="data.tableData">
      <el-table-column
        v-for="(item, index) in data.tableItems"
        :key="index"
        :prop="item"
        :label="item"
      >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { reactive } from "vue";
import request from "@/request";
import _ from "lodash";

export default {
  name: "Home",
  setup(props, a) {
    const data = reactive({
      tableName: "json_data",
      tableData: [],
      tableItems: ["id"]
    });

    const search = async () => {
      const { code, data: resData } = await request.get("/search", {
        params: {
          tableName: data.tableName
        }
      });

      if (code === 200 && resData.length) {
        data.tableItems = _.map(resData[0], (i, key) => key);
        data.tableData = resData;
      }
    };
    console.log(data);
    return {
      data,
      search
    };
  }
};
</script>
