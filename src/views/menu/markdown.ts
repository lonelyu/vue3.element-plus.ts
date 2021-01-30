export default [
  {
    icon: 'el-icon-location',
    label: 'markdown首页',
    name: 'markdown-index',
  },
  {
    label: 'ECMA Script6',
    icon: 'el-icon-menu',
    children: [
      {
        label: 'ECMAScript 6简介',
        name: 'markdown-es6',
        query: { fileId: 'intro' }
      },
      {
        label: 'let 和 const 命令',
        name: 'markdown-es6',
        query: { fileId: 'let' }
      },
      {
        label: '变量的解构赋值',
        name: 'markdown-es6',
        query: { fileId: 'destructuring' }
      },
      {
        label: '字符串的扩展',
        name: 'markdown-es6',
        query: { fileId: 'string' }
      },
      {
        label: '正则的扩展',
        name: 'markdown-es6',
        query: { fileId: 'regex' }
      },
      {
        label: '数值的扩展',
        name: 'markdown-es6',
        query: { fileId: 'number' }
      },
      {
        label: '函数的扩展',
        name: 'markdown-es6',
        query: { fileId: 'function' }
      },
      {
        label: '数组的扩展',
        name: 'markdown-es6',
        query: { fileId: 'array' }
      },
      {
        label: '对象的扩展',
        name: 'markdown-es6',
        query: { fileId: 'object' }
      },
      {
        label: 'Symbol',
        name: 'markdown-es6',
        query: { fileId: 'symbol' }
      },
      {
        label: 'Set 和 Map 数据结构',
        name: 'markdown-es6',
        query: { fileId: 'set-map' }
      },
      {
        label: 'Proxy',
        name: 'markdown-es6',
        query: { fileId: 'proxy' }
      },
      {
        label: 'Reflect',
        name: 'markdown-es6',
        query: { fileId: 'reflect' }
      },
      {
        label: 'Promise 对象',
        name: 'markdown-es6',
        query: { fileId: 'promise' }
      },
      {
        label: 'Iterator 和 for...of 循环',
        name: 'markdown-es6',
        query: { fileId: 'iterator' }
      },
      {
        label: 'Generator 函数的语法',
        name: 'markdown-es6',
        query: { fileId: 'generator' }
      },
      {
        label: 'Generator 函数的异步应用',
        name: 'markdown-es6',
        query: { fileId: 'generator-async' }
      },
      {
        label: 'async 函数',
        name: 'markdown-es6',
        query: { fileId: 'async' }
      },
      {
        label: 'Class 的基本语法',
        name: 'markdown-es6',
        query: { fileId: 'class' }
      },
      {
        label: 'Class 的继承',
        name: 'markdown-es6',
        query: { fileId: 'class-extends' }
      },
      {
        label: 'Decorator',
        name: 'markdown-es6',
        query: { fileId: 'decorator' }
      },
      {
        label: 'Module 的语法',
        name: 'markdown-es6',
        query: { fileId: 'module' }
      },
      {
        label: 'Module 的加载实现',
        name: 'markdown-es6',
        query: { fileId: 'module-loader' }
      },
      {
        label: '编程风格',
        name: 'markdown-es6',
        query: { fileId: 'style' }
      },
      {
        label: '读懂规格',
        name: 'markdown-es6',
        query: { fileId: 'spec' }
      },
      {
        label: 'ArrayBuffer',
        name: 'markdown-es6',
        query: { fileId: 'arraybuffer' }
      },

    ]
  },
  {
    label: 'VUE2.x-3.x',
    icon: 'el-icon-menu',
    children: [
      {
        label: '重大变化',
        name: 'markdown-es6',
        query: { fileId: '重大变化' }
      },
    ]
  }
]