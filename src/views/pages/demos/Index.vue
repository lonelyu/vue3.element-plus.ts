<template>
  <div>
    <h3>本机mysql一些操作:9999端口</h3>
    <h5>增加</h5>
    <el-form :model="form" ref="addForm" label-width="100px">
      <el-form-item label="活动名称" prop="content">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
    <h5>删除</h5>
    <el-form :model="form" ref="delForm" label-width="100px">
      <el-form-item label="删除的表名称" prop="content">
        <el-input v-model="form.tableName"></el-input>
      </el-form-item>
      <el-form-item label="匹配的key" prop="content">
        <el-input v-model="form.key"></el-input>
      </el-form-item>
      <el-form-item label="匹配的value" prop="content">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
    <h5>修改</h5>
    <el-form :model="form" ref="delForm" label-width="100px">
      <el-form-item label="删除的表名称" prop="content">
        <el-input v-model="form.tableName"></el-input>
      </el-form-item>
      <el-form-item label="匹配的key" prop="content">
        <el-input v-model="form.key"></el-input>
      </el-form-item>
      <el-form-item label="匹配的value" prop="content">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      form: {
        content: ""
      }
    };
  },
  methods: {
    submitForm(formName: string) {
      const form: any = this.$refs;
      form[formName].validate((valid: boolean) => {
        if (valid) {
          this.$http
            .post("/add", {
              tableName: "json_data",
              data: this.form
            })
            .then(res => {
              alert(res.data);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
});
</script>
