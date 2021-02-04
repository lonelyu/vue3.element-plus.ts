export default [
  {
    icon: 'el-icon-location',
    label: 'demo首页',
    name: 'demos-index',
  },
  {
    icon: 'el-icon-menu',
    label: 'webSocket对话',
    children: [{
      label: '对话',
      name: 'demos-socket-chat',
    }]
  },
  {
    label: 'mysql操作演示',
    icon: 'el-icon-menu',
    children: [
      {
        label: '添加',
        name: 'demos-mysql-add'
      },
      {
        label: '删除',
        name: 'demos-mysql-del'
      },
      {
        label: '修改',
        name: 'demos-mysql-edit'
      },
      {
        label: '查询',
        name: 'demos-mysql-search'
      },
    ]
  }
]