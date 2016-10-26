// import xhr from './jquery';
// import xhr from './superagent';
import xhr from './vueResource';

/**
 * XHR 请求接口定义
 * @param  {String} options.method 请求方法，默认为 get。支持 post、put、patch、delete 等
 * @param  {String} options.url    请求路径，基于 rootPath 地址。例：欲请求 http://localhost:9000/user，仅需要填写 /user 即可
 * @param  {Object} options.body   请求体。后端 Express 使用 req.body 获取该对象
 * @param  {Boolean} options.objectbody  后台接口接受参数类型 默认为 objectbody:true, 不以对像形式传参时设为 objectbody:false
 * @return {Promise}
 *
 * 使用例子 xhr({ method: 'post', url: 'XXX', body: {Object}, objectbody:false })
 * 最简单的例子 xhr({ url: '/user' })
 */
export default xhr;
