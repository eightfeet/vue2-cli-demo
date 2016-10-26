// 不同模块应代码分离
import msgRoutes from './msg';
import userCenterRoutes from './usercenter';
import scssapiRoutes from './scssapi';

const allRoutes = [
  ...scssapiRoutes,
  ...msgRoutes,
  ...userCenterRoutes
];

export default [
  // index
  {
    path: '/',
    component: require('components/'),
    children: [
    ]
  },
  // others
  ...allRoutes,
  // 404
  {
    path: '*',
    component: require('components/not-found.vue')
  }
];
