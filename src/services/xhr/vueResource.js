// VueResource 最大的好处就是可以在组件中直接 this.$http 实现请求
// 但由于有服务层的存在，因此引入 VueResource 相当鸡肋，不建议使用
import Vue from 'vue';
import VueResource from 'vue-resource';
import { rootPath, errHandler } from './config';
const REQ_HEADER = {'EIGHTFEET': 'Feet', 'Content-Type': 'application/json', 'gggggg': '121212112112'};
Vue.use(VueResource);

Vue.http.options.root = rootPath;
Vue.http.options.emulateJSON = true;
Vue.http.options.xhr = { withCredentials: true };

const xhr = ({ url, body, method = 'get' }) => {
  // 引入了 ES6 的 Promise 实现
  return new Promise((resolve, reject) => {
    Vue.http[method.toLowerCase()](
      rootPath + url,
      body, {
        headers: REQ_HEADER
      })
      .then((res) => { // 从封装体中解构出data字段
        // msg.headers.get('Expires');
        let data = res.data;
        if (!data) { // 读取 undefined/null 的属性会报错
          return resolve(null);
        }
        if (data._code) {
          return errHandler(data._msg);
        }
        resolve(data);
      }, errHandler);
  });
};

export default xhr;
