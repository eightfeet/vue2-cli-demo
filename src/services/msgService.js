import xhr from './xhr/';
/**
 * 对应后端的 /msg/* 所有 API
 */
class MsgService {
  /**
   * @param  {String} options.author   作者名
   */
  fetchCity (id) {
    let url = `/mf/commonservice/api/cities/getCityByProvince/${id}`;
    return xhr({ url });
  }

  /**
   * 测试 post
   * @param  {Object} msgBody { title:{String}, content:{String} }
   * @return {Promise}
   */
  add (msgBody) {
    return xhr({
      // objectbody: false,
      method: 'post',
      url: '/msg',
      body: msgBody
    });
  }

}

// 实例化后再导出
export default new MsgService();
