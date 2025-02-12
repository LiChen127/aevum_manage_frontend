import axios from './axios';

// 路径前面统一添加/user
const baseUrl = '/user';

// 用户注册
const register = (data: { username: string; password: string; role: string }) => {
  return axios({
    url: `${baseUrl}/register`,
    method: 'post',
    data,
  });
};

// 用户登录
const login = (data: { username: string; password: string }) => {
  return axios({
    url: `${baseUrl}/login`,
    method: 'post',
    data,
  });
};

// 用户登出
const logout = (data: any) => {
  return axios({
    url: `${baseUrl}/logout`,
    method: 'post',
    data,
  });
};

// 获取用户信息
const getUserInfo = (data: any) => {
  return axios({
    url: `${baseUrl}/getUserInfo`,
    method: 'get',
    data,
  });
};

// 更新用户信息
const updateUserInfo = (data: any) => {
  return axios({
    url: `${baseUrl}/updateUserInfo`,
    method: 'post',
    data,
  });
};

// 获取用户信息列表(分页+搜索)
const getUserList = (data: any) => {
  return axios({
    url: `${baseUrl}/getUserList`,
    method: 'get',
    data,
  });
};

// 获取所有用户信息列表
const getAllUserList = (data: any) => {
  return axios({
    url: `${baseUrl}/getAllUserList`,
    method: 'get',
    data,
  });
};

export { register, login, logout, getUserInfo, updateUserInfo, getUserList, getAllUserList };
