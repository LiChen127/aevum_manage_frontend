import axios from './axios';

// 用户注册
const register = (data: any) => {
  return axios.post('/user/signup', data);
};

// 用户登录
const login = (data: any) => {
  return axios.post('/user/login', data);
};

// 用户登出
const logout = (data: any) => {
  return axios.post('/user/logout', data);
};

// 获取用户信息
const getUserInfo = (data: any) => {
  return axios.get('/user/getUserInfo', data);
};

// 更新用户信息
const updateUserInfo = (data: any) => {
  return axios.post('/user/updateUserInfo', data);
};

// 获取用户信息列表(分页+搜索)
const getUserList = (data: any) => {
  return axios.get('/user/getUserList', data);
};

// 获取所有用户信息列表
const getAllUserList = (data: any) => {
  return axios.get('/user/getAllUserList', data);
};

export default {
  register,
  login,
  logout,
  getUserInfo,
  updateUserInfo,
  getUserList,
  getAllUserList,
};
