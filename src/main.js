// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable semi */
import Vue from 'vue'
import router from './routes/';
import App from './App';

/* 启动文件 */
import './directives/';
import './filters/';

/* VueTouch暂不支持vue2.0 */
// import VueTouch from 'vue-touch';
// Vue.use(VueTouch);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

// 把根组件挂载到 id 为 app 的 DOM 上
// router.start(App, '#app');
