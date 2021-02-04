<template>
  <div class="wrap-best">
    <div class="msg-box" ref="msgList">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in vData.msgList"
          :key="index"
          timestamp="2018/4/12"
          placement="top"
        >
          <el-card>
            <h4>发送人：{{ item.createdName }}</h4>
            <p>{{ item.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="form-box">
      <el-form ref="form1" label-suffix="：" label-width="120px" inline>
        <el-form-item label="发送人">
          <el-input placeholder="请输入内容" v-model="sendForm.createdName" />
        </el-form-item>
      </el-form>
      <el-form ref="form2" label-suffix="：" label-width="120px">
        <el-form-item label="发送内容">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="sendForm.content"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发送</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, nextTick, Ref } from "vue";
import { ElNotification } from "element-plus";
import ws from "@/socket";

export default defineComponent({
  setup() {
    interface VData {
      msgList: object[];
    }
    const vData = reactive({
      msgList: []
    }) as VData;
    const sendForm = reactive({
      content: "",
      createdName: ""
    });
    const msgList: Ref = ref(null);
    const ws1 = ws({
      url: "/chat",
      open: () => {
        ElNotification({
          title: "连接成功",
          message: "socket",
          type: "success"
        });
      },
      message: data => {
        const jsonData = JSON.parse(data);
        vData.msgList = [...vData.msgList, ...jsonData];
        nextTick(() => {
          msgList.value.scrollTop = msgList.value.scrollHeight;
        });
      }
    });

    const onSubmit = () => {
      ws1.send(JSON.stringify(sendForm));
    };

    return {
      sendForm,
      vData,
      onSubmit,
      msgList
    };
  }
});
</script>

<style lang="scss" scoped>
.wrap-best {
  height: 100%;
  display: grid;
  grid-template-rows: auto 200px;
}
.msg-box {
  overflow: auto;
}
.form-box {
  padding: 30px 0;
}
</style>
