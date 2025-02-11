import request from '../utils/request';

// 用户注册
const register = (data: { username: string; password: string; role: string }) => {
  return request({
    url: '/api/user/register',
    method: 'post',
    data,
  });
};

// 用户登录
const login = (data: { userId: string; username: string; password: string }) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  });
};

// 用户登出
const logout = (data: any) => {
  return request({
    url: '/user/logout',
    method: 'post',
    data,
  });
};

// 获取用户信息
const getUserInfo = (data: any) => {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    data,
  });
};

// 更新用户信息
const updateUserInfo = (data: any) => {
  return request({
    url: '/user/updateUserInfo',
    method: 'post',
    data,
  });
};

// 获取用户信息列表(分页+搜索)
const getUserList = (data: any) => {
  return request({
    url: '/user/getUserList',
    method: 'get',
    data,
  });
};

// 获取所有用户信息列表
const getAllUserList = (data: any) => {
  return request({
    url: '/user/getAllUserList',
    method: 'get',
    data,
  });
};

export { register, login, logout, getUserInfo, updateUserInfo, getUserList, getAllUserList };
