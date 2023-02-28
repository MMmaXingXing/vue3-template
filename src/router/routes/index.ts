import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

// import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';
// import { mainOutRoutes } from './mainOut';
// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (<{default: any}>modules[key]).default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  // redirect: PageEnum.BASE_HOME,
  component: () => import('/@/views/AboutView.vue'),
  meta: {
    title: 'Root',
  },
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  RootRoute
];
