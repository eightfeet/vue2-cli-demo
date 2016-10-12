/**
 * 个位数前加零
 * @param  {Number} val
 * @return {String/Number}
 */
let zerofill = val => val >= 10 ? val : '0' + val;
/* 相当于：
  var zerofill = function (val) {
    return val >=10 ? val : '0' + val
  };
*/

/**
 * 格式化时间
 * @param  {Number} time 时间戳
 * @param  {Number} type 格式化类型
 * @return {String}
 */
export default (time, type, lang) => {
  let text = lang || '';
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  switch (type) {
    case 0: // 01-05
      return text === 'cn' ? `${zerofill(month)}月${zerofill(day)}日` : `${zerofill(month)}-${zerofill(day)}`;
    case 1: // 11:12
      return text === 'cn' ? `${zerofill(hours)}时${zerofill(minutes)}分` : `${zerofill(hours)}-${zerofill(minutes)}`;
    case 2: // 2015-01-05
      return text === 'cn' ? `${year}年${zerofill(month)}月${zerofill(day)}日` : `${year}-${zerofill(month)}-${zerofill(day)}`;
    case 3: // 2015-01-05 11:12
      return text === 'cn' ? `${year}年${zerofill(month)}月${zerofill(day)}日  ${zerofill(hours)}时${zerofill(minutes)}分` : `${year}-${zerofill(month)}-${zerofill(day)}  ${zerofill(hours)}:${zerofill(minutes)}`;
    default: // 2015-01-05 11:12:13
      return text === 'cn' ? `${year}年${zerofill(month)}月${zerofill(day)}日  ${zerofill(hours)}时${zerofill(minutes)}分${zerofill(second)}秒` : `${year}-${zerofill(month)}-${zerofill(day)}  ${zerofill(hours)}:${zerofill(minutes)}:${zerofill(second)}`;
  }
};
