<template>
  <div>
    <div v-loading="vData.loading" v-html="vData.valHtml" id="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import request from "@/request";

import marked from "marked";
import Prism from "prismjs";

export default defineComponent({
  name: "Home",
  setup() {
    const vData = reactive({
      valHtml: "",
      loading: true
    });
    const route = useRoute();
    const watchRouter = watch(
      () => route.query,
      () => {
        const fileId: any = route.query.fileId;
        console.log(fileId);
        if (fileId) {
          vData.loading = true;
          request.get(`/assets/books/es6/${fileId}.md`).then(response => {
            vData.valHtml = marked(response);
            nextTick(() => {
              const nodes = document.querySelectorAll(
                "#content pre code"
              ) as NodeListOf<HTMLElement>;
              nodes.forEach(
                (item: { innerHTML: string; innerText: string }) => {
                  item.innerHTML = Prism.highlight(
                    item.innerText,
                    Prism.languages.javascript,
                    "javascript"
                  );
                }
              );
              vData.loading = false;
            });
          });
        }
      },
      {
        immediate: true
      }
    );

    return {
      watchRouter,
      vData
    };
  }
});
</script>
<style lang="scss" src="./es6.scss" />
