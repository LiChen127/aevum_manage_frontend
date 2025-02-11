import axios from 'axios';
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log(config, 'request interceptors');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    console.log(res, 'response interceptors');
    return res;
  },
  (err) => {
    console.log(err, 'response interceptors err');
    return Promise.reject(err);
  },
);

export default instance;
