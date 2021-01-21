<template>
  <div>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      hello: ""
    };
  },
  created() {
    this.$http.get("/demo").then(res => {
      this.hello = res.data;
    });
  }
});
</script>
