<template>
  <div class="wrap-box">
    <h1 class="title">这是markdown测试，左边输入markdown语法，右边输出效果</h1>
    <el-row>
      <el-col :span="12">
        <el-input type="textarea" placeholder="请输入内容" v-model="val">
        </el-input>
      </el-col>
      <el-col :span="12">
        <div markdown v-html="valHtml"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  renderer: marked.Renderer(),
  highlight: function(code: string) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default defineComponent({
  name: "Home",
  data() {
    return {
      val: ""
    };
  },
  computed: {
    valHtml(): string {
      return marked(this.val);
    }
  }
});
</script>

<style lang="scss">
.wrap-box {
  height: 100%;
  padding-top: 40px;
  box-sizing: border-box;
  position: relative;
  .title {
    width: 100%;
    line-height: 25px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
  }
  .el-row {
    height: 100%;

    .el-textarea {
      height: 100%;

      textarea {
        height: 100%;
        resize: none;
      }
    }
  }

  .el-col {
    padding: 0 10px;
    height: 100%;

    [markdown] {
      background-color: #eee;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 4px;
      overflow: auto;
    }
  }
}
</style>
