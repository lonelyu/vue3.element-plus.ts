import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:9999',
});

Axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  if (typeof res.data === 'object' && res.data.code !== 200) {
    alert(res.data.msg);
  }
    return res.data;
    
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default Axios;