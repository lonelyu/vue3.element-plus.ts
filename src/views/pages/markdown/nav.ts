export default [
  {
    label:'其他',
    icon: 'el-icon-location',
    children:[
      {
        label: '首页',
        name: 'markdown-index',
        query: {}
      }
    ]
  },
  {
    label:'ECMA Script6',
    icon: 'el-icon-location',
    children:[
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
    ]
  }
]