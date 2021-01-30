declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import marked from "marked";
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'marked';
declare module 'prismjs';
declare module 'lodash';