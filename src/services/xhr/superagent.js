import request from 'superagent';
import { rootPath, errHandler } from './config';

let REQ_HEADER = {'X-API-Key': 'foobar', 'Author': 'EIGHTFEET', 'Content-Type': 'application/json'};

function isObject (obj) {
  return obj !== null && typeof obj === 'object';
}

function pushEncodedKeyValuePair (pairs, key, val) {
  if (Array.isArray(val)) {
    val.forEach((v) => {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else {
    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
  }
}

function serializeObject (obj) {
  if (!isObject(obj)) return obj;
  let pairs = [];
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
    }
  }
  return pairs.join('&');
}

const xhr = ({ url, body = null, method = 'get', objectbody = true }) => {
  // 当不以对象传参时需要设置参数 objectbody = false
  if (body && !objectbody) {
    body = serializeObject(body);
    REQ_HEADER['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  // P.S: 此处引入了 ES6 的 Promise 实现
  return new Promise((resolve, reject) => {
    request[method.toLowerCase()](rootPath + url)
      // 跨域允许带上 cookie（http://visionmedia.github.io/superagent/#cors）
      .withCredentials()
      .send(body)
      .set(REQ_HEADER)
      .end((err, re) => {
        if (err) {
          return errHandler(err);
        }
        if (!re.body) {
          return resolve(null);
        }
        if (re.body._code) {
          return errHandler(re.body._msg);
        }

        resolve(re.body);
      });
  });
};

export default xhr;
