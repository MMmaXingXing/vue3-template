import type { AppRouteModule } from '/@/router/types';
const home: AppRouteModule = {
  path: '/',
  name: 'Home',
  component: () => import('/@/views/HomeView.vue'),
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: 'home',
    orderNo: 100000,
  },
  children: [
    {
      path: 'about',
      name: 'About',
      component: () => import('/@/views/AboutView.vue'),
      meta: {
        title: 'about',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default home;