<script setup lang='ts'>
import { useUserStore } from '@/store/user';
import { ref, reactive,onMounted } from 'vue';
import area from '@/static/area.json';
import { useAreaOptions } from '@/store/areaOptions';
import { getUserProfileByUserId,createUserProfile,updateUserProfile } from '@/api/userProfile';
import { ElMessage } from 'element-plus';
// 随机生成图片链接 https://www.loliapi.com/acg/pp/
const userStore = useUserStore();
const userId = userStore.userId;
const userInfo = userStore.userInfo;
const areaOptionsStore = useAreaOptions();


interface Area {
  value: string;
  label: string;
  children?: Area[];
}

// 完善userInfoDialogVisible
const userInfoDialogVisible = ref(false); 

// 省市区
const areaOptions = ref<Area[]>([]);

// 初始化省市区为组件想要的数据结构并存到pinia
const initAreaOptions = () => { 
  for (const value of area) {
    areaOptions.value.push({
      value: value.code,
      label: value.province,
      children: value.citys.map(city => ({
        value: city.code,
        label: city.city,
        children: city.areas.map(area => ({
          value: area.code,
          label: area.area,
        })),
      })),
    });
  }
  areaOptionsStore.setAreaOptions(areaOptions.value); 
}

// 用户信息
const userInfoConfig = reactive({
  nickname: '',
  gender: '',
  birthday: '',
  location: '',
  bio: '',
})


// 完善用户信息点击事件函数
const completeUserInfo = () => {
  userInfoDialogVisible.value = true;
  initAreaOptions();
}

// 提交用户信息
const handleSubmit = async () => {
  try {
    console.log(userInfoConfig);
  } catch (error) {
    
  }finally {
    userInfoDialogVisible.value = false;
    // 刷新用户信息
    // userStore.getUserInfo();
    Object.assign(userInfo, userInfoConfig);
  }
}

const getUserProfile = async () => {
  try {
    const res = await getUserProfileByUserId({
      userId: userId
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    ElMessage.error('服务端错误');
  }
}

onMounted(() => {
  getUserProfile();
})

</script>

<script lang="ts">
export default {
  name: 'Header'
}
</script>

<template>
 <div class="base-header">
  <div class="base-header-left" @click="completeUserInfo">
    <img src="https://www.loliapi.com/acg/pp" alt="头像" />
    <span>{{ userInfo?.nickname || userInfo?.username }}</span>
  </div>
  <div class="base-header-right"></div>
 </div>
 <el-dialog title="账号信息" width="50%" v-model="userInfoDialogVisible">
  <div class="user-info">
    <el-form :model="userInfo" label-width="120px">
      <el-form-item label="昵称">
        <el-input v-model="userInfoConfig.nickname" style="width: 220px"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-select 
          v-model="userInfoConfig.gender" 
          placeholder="请选择性别"  
          style="width: 220px"
        >
          <el-option label="男" value="male" />
          <el-option label="女" value="female" />
          <el-option label="其他" value="others" />
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker 
          v-model="userInfoConfig.birthday"
         type="date" 
         placeholder="请选择出生日期" 
        />
      </el-form-item>
      <el-form-item label="地区">
        <el-cascader
          :options="areaOptions"
          v-model="userInfoConfig.location"
          placeholder="请选择地区"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input 
          v-model="userInfoConfig.bio"    
          type="textarea"
          :maxlength="30"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <!-- 图片上传 -->
    <div class="user-info-photo">
      <img 
      src="https://www.loliapi.com/acg/pp"
       alt="头像" 
       style="width: 200px; height: 200px; border-radius: 50%; margin-bottom: 50px"
      />
    </div>
  </div>
  <div class="submit-btn">
    <el-button 
      type="primary" 
      @click="handleSubmit"
      style="background-color: #007bff; color: #fff; border: none;"
    >
      提交
    </el-button>
    <el-button @click="userInfoDialogVisible = false">取消</el-button>
  </div>
 </el-dialog>
</template>

<style lang='scss' scoped>
.base-header {
  height: 100%;
  width: 100%;
  padding: 10px;
  position: relative;

  &-left {
    position: absolute;
    left: 20px;
    top: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  &-right {
    position: absolute;
    right: 10px;
    top: 10px;
    margin: 0 auto;
  }

}

.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  :deep(.el-form) {
    width: 60%;
    margin-bottom: 20px;
  }

  &-photo {
    height: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
  }
}

.submit-btn {
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  :deep(.el-button) {
    font-size: 18px;
    padding: 10px 20px;
    width: 100px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>