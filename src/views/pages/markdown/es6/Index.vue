<template>
  <div>
    <div v-loading="loading" v-html="valHtml" id="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import marked from "marked";
import Prism from "prismjs";

export default defineComponent({
  name: "Home",
  data() {
    return {
      valHtml: "",
      loading: true
    };
  },
  watch: {
    $route: {
      handler(route) {
        console.log("123");
        const fileId: string = route.query.fileId;
        if (fileId) {
          this.loading = true;
          this.$http.get(`/doc/es6/${fileId}.md`).then(response => {
            this.valHtml = marked(response.data);
            this.$nextTick(() => {
              const nodes: NodeListOf<HTMLElement> = document.querySelectorAll(
                "#content pre code"
              );
              nodes.forEach(
                (item: { innerHTML: string; innerText: string }) => {
                  item.innerHTML = Prism.highlight(
                    item.innerText,
                    Prism.languages.javascript,
                    "javascript"
                  );
                }
              );
              this.loading = false;
            });
          });
        }
      },
      immediate: true
    }
  }
});
</script>
<style lang="scss" src="./es6.scss" />
