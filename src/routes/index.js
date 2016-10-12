import Vue from 'vue';
import VueRouter from 'vue-router';
import routesMap from './map/'; // 路由映射

// 在这里访问不了根组件的 this.$root.userData，但服务照常无障碍访问
// import userService from 'SERVICE/userService';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routesMap
});

export default router;
