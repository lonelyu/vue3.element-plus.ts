<template>
  <div>
    <div v-loading="loading" v-html="valHtml" id="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { route } from "vue-router";
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

    const watchRouter = watch(route, {
      handler(route) {
        const fileId: string = route.query.fileId;
        if (fileId) {
          vData.loading = true;
          request.get(`/assets/books/es6/${fileId}.md`).then(response => {
            vData.valHtml = marked(response);
            this.$nextTick(() => {
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
      immediate: true
    });

    return {
      watchRouter,
      vData
    };
  }
});
</script>
<style lang="scss" src="./es6.scss" />
