import axios from './axios';

// 创建人物画像
const createUserProfile = (data: any) => {
  return axios.post('/userProfile/createUserProfile', data);
};

// 获取人物画像
const getUserProfile = (data: any) => {
  return axios.get('/userProfile/getUserProfile', data);
};

// 修改用户画像
const updateUserProfile = (data: any) => {
  return axios.post('/userProfile/updateUserProfile', data);
};

// 获取用户画像byProfileId query
const getUserProfileByProfileId = (data: any) => {
  return axios.get('/userProfile/getUserProfileByProfileId', data);
};

// 获取用户信息(user&profile)
const getUserListWithProfie = (data: any) => {
  return axios.get('/userProfile/getUserListWithProfie', data);
};


export default {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  getUserProfileByProfileId,
  getUserListWithProfie,
};
