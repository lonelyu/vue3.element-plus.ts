<template>
  <el-container class="container">
    <el-header>
      <el-menu
        router
        :default-active="activeHeader"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="headerSelect"
      >
        <el-menu-item index="demos" :route="{ name: 'demos-index' }"
          >一些demo</el-menu-item
        >
        <el-menu-item index="markdown" :route="{ name: 'markdown-index' }"
          >markdown文档</el-menu-item
        >
      </el-menu>
    </el-header>
    <el-container class="container-con">
      <el-aside>
        <el-menu
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="(item1, index1) in menuList" :key="index1">
            <el-menu-item
              v-if="!item1.children"
              :index="'' + index1"
              :route="{ name: item1.name }"
            >
              <i :class="item1.icon"></i>
              <template #title>{{ item1.label }}</template>
            </el-menu-item>
            <el-submenu v-else :index="'' + index1">
              <template #title>
                <i :class="item1.icon"></i>
                <span>{{ item1.label }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  v-for="(item2, index2) in item1.children"
                  :key="index2"
                  :index="'' + index1 + index2"
                  :route="{ name: item2.name, query: item2.query }"
                  >{{ item2.label }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import demosList from "./menu/demos";
import markdownList from "./menu/markdown";

export default defineComponent({
  name: "Home",
  data() {
    return {
      markdownList,
      activeHeader: "demos"
    };
  },
  computed: {
    menuList() {
      switch (this.activeHeader) {
        case "demos":
          return demosList;
        case "markdown":
          return markdownList;
      }
      return [];
    }
  },
  methods: {
    headerSelect(i: string) {
      this.activeHeader = i;
    }
  }
});
</script>

<style lang="scss" scoped>
$aside-h: 200px;
.container {
  height: 100%;
  padding-top: 60px;
  position: relative;
  .container-con {
    height: 100%;
    overflow: auto;
  }
}
.el-header {
  width: 100%;
  padding: 0 0 0 $aside-h;
  background-color: #545c64;
  position: absolute;
  top: 0;
  left: 0;
}
.el-aside {
  width: $aside-h !important;
  background-color: #545c64;
}
.el-menu {
  border: 0;
}
</style>
<style lang="scss" src="./scss/markdown.scss" />
