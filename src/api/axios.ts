import axios from 'axios';
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 获取token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 从cookie中获取token
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    console.log(token);
    if (token) {
      localStorage.setItem('token', token);
    }
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
