import { defineConfig } from '@umijs/max';

export default defineConfig({
  proxy: {
    '/api-generator': {
      target: 'http://127.0.0.1:29000',
      changeOrigin: true,
      pathRewrite: { '^/api-generator': '/api-generator' },
    },
  },
  antd: {
    compact: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '系统工具',
      path: '/system-tool',
      routes: [
        {
          name: '代码生成',
          path: '/system-tool/code-generator',
          component: './SystemTool/CodeGenerator',
        },
        {
          name: '修改生成配置',
          path: '/system-tool/gen-table/info/:tableId',
          component: './SystemTool/GenTable',
        },
      ],
    },
  ],
  npmClient: 'pnpm',
});
