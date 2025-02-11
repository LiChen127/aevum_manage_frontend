<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
import { login, register } from '@/api/user';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

// 登录表单
const loginForm = reactive({
  username: '',
  password: '',
  usernameRules: {
    error: false,
    message: '请输入正确的手机号',
    trigger: 'blur',
    pattern: /^1[3-9]\d{9}$/,
  }, // 手机号11位, 13-9开头
  passwordRules: {
    error: false,
    message: '请输入正确的密码, 至少8位, 数字和字母',
    trigger: 'blur',
    pattern: /^[a-zA-Z0-9]{8,}$/,
  }, // 密码至少8位, 数字和字母
});
// 注册表单
const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  usernameRules: {
    error: false,
    message: '请输入正确的手机号',
    trigger: 'blur',
    pattern: /^1[3-9]\d{9}$/,
  }, // 手机号11位, 13-9开头
  passwordRules: {
    error: false,
    message: '请输入正确的密码, 至少8位, 数字和字母',
    trigger: 'blur',
    pattern: /^[a-zA-Z0-9]{8,}$/,
  }, // 密码至少8位, 数字和字母
  confirmPasswordRules: {
    error: false,
    message: '请确认密码',
    trigger: 'blur',
    pattern: /^[a-zA-Z0-9]{8,}$/,
  },
});

// 登录表单是否显示
const loginFormShow = ref(true);
// 表单验证

// 登录表单手机号验证
const handleLoginFormUserBlur = () => {
  // 手机号验证
  if (!loginForm.usernameRules.pattern.test(loginForm.username)) {
    loginForm.usernameRules.error = true;
  } else {
    loginForm.usernameRules.error = false;
  }
};

// 登录表单密码验证
const handleLoginFormPasswordBlur = () => {
  // 密码验证
  if (!loginForm.passwordRules.pattern.test(loginForm.password)) {
    loginForm.passwordRules.error = true;
  } else {
    loginForm.passwordRules.error = false;
  }
};

// 登录事件函数
const handleLogin = async () => {
  try {
    const res = await login({
      userId: userStore.getUserId,
      username: loginForm.username,
      password: loginForm.password,
    });
    if ((res.data as any).code === 201) {
      ElMessage.success('登录成功');
      // 存一下cookie
      console.log(res);
    }
  } catch (error) {
    console.log(error);
    ElMessage.error('登录失败, 服务器错误');
  }
};

// 注册表单手机号验证
const handleRegisterFormUserBlur = () => {
  // 手机号验证
  if (!registerForm.usernameRules.pattern.test(registerForm.username)) {
    registerForm.usernameRules.error = true;
  } else {
    registerForm.usernameRules.error = false;
  }
};

// 注册表单密码验证
const handleRegisterFormPasswordBlur = () => {
  // 密码验证
  if (!registerForm.passwordRules.pattern.test(registerForm.password)) {
    registerForm.passwordRules.error = true;
  } else {
    registerForm.passwordRules.error = false;
  }
};

// 注册表单确认密码验证
const handleRegisterFormConfirmPasswordBlur = () => {
  // 确认密码验证
  if (registerForm.password !== registerForm.confirmPassword) {
    registerForm.confirmPasswordRules.error = true;
  } else {
    registerForm.confirmPasswordRules.error = false;
  }
};

// 注册事件函数
const handleRegister = async () => {
  try {
    const registerConfig = {
      username: registerForm.username,
      password: registerForm.password,
      role: 'superAdmin',
    };
    const res = await register(registerConfig);
    if ((res.data as any).code === 201 && (res.data.data as any).infoCode === 0) {
      ElMessage.success('注册成功');
      loginFormShow.value = true;
      Object.assign(registerForm, {
        username: '',
        password: '',
        confirmPassword: '',
      });
      // 获取userId存到Pinia
      const userId = (res.data.data as any).userId;
      userStore.setUserId(String(userId));
    }
    if ((res.data.data as any).infoCode === 1) {
      ElMessage.warning('手机号已存在');
    }
    if ((res.data.data as any).infoCode === 2) {
      ElMessage.warning('密码格式不正确');
    }
  } catch (error) {
    console.log(error);
    ElMessage.error('注册失败, 服务器错误');
  }
};

</script>

<template>
  <div class="container">
    <div class="container-left">
      <img src="@/assets/images/admin/admin.png" alt="admin-logo" />
    </div>
    <div class="container-right">
      <div class="container-right-title">
        <span style="font-size: 24px; font-weight: 500; margin-bottom: 10px"> 欢迎来到 </span>
        <br />
        <span style="font-size: 30px; font-weight: 600; margin-top: 15px; color: #6358dc">
          Aevum用户管理后台
        </span>
      </div>
      <!-- 表单 -->
      <div class="login-form admin-form" v-if="loginFormShow">
        <form @submit.prevent="handleLogin">
          <div class="form-item">
            <label for="username">手机号</label>
            <input
              type="text"
              id="username"
              v-model="loginForm.username"
              @blur="handleLoginFormUserBlur"
            />
            <span class="error-message" v-if="loginForm.usernameRules.error">
              {{ loginForm.usernameRules.message }}
            </span>
          </div>
          <div class="form-item">
            <label for="password">密码</label>
            <input
              type="password"
              id="password"
              v-model="loginForm.password"
              @blur="handleLoginFormPasswordBlur"
            />
            <span class="error-message" v-if="loginForm.passwordRules.error">
              {{loginForm.passwordRules.message }}
            </span>
          </div>
          <div class="form-item">
            <button type="submit" @click.prevent="handleLogin">登录</button>
          </div>
        </form>
      </div>
      <div class="register-form admin-form" v-else>
        <form @submit.prevent="handleRegister">
          <div class="form-item">
            <label for="username">手机号</label>
            <input
              type="text"
              id="username"
              v-model="registerForm.username"
              @blur="handleRegisterFormUserBlur"
            />
            <span class="error-message" v-if="registerForm.usernameRules.error">{{
              registerForm.usernameRules.message
            }}</span>
          </div>
          <div class="form-item">
            <label for="password">密码</label>
            <input
              type="password"
              id="password"
              v-model="registerForm.password"
              @blur="handleRegisterFormPasswordBlur"
            />
            <span class="error-message" v-if="registerForm.passwordRules.error">{{
              registerForm.passwordRules.message
            }}</span>
          </div>
          <div class="form-item">
            <label for="confirmPassword">确认密码</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="registerForm.confirmPassword"
              @blur="handleRegisterFormConfirmPasswordBlur"
            />
            <span class="error-message" v-if="registerForm.confirmPasswordRules.error">
              {{ registerForm.confirmPasswordRules.message }}
            </span>
          </div>
          <div class="form-item">
            <button type="submit" @click.prevent="handleRegister">注册</button>
          </div>
        </form>
      </div>
      <div class="toggle-form" v-if="loginFormShow">
        <span>没有账号？</span>
        <span
          style="color: #6358dc; cursor: pointer; text-decoration: underline"
          @click="loginFormShow = false"
        >
          立即注册
        </span>
      </div>
      <div class="toggle-form" v-else>
        <span>已有账号？</span>
        <span
          style="margin-top: 30px; color: #6358dc; cursor: pointer; text-decoration: underline"
          @click="loginFormShow = true"
        >
          立即登录
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
  background-color: #e5e5e5;

  &-left {
    flex: 1;
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 620px;
      height: 629px;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  &-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: calc(100% - 80px);
    width: 40%;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    margin: 40px;

    &-title {
      position: absolute;
      top: 50px;
      left: 50px;
      font-size: 24px;
      font-weight: 600;
      font-family: 'PingFang SC', sans-serif;
      color: #333;
      margin-bottom: 20px;
      font-family:
        'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .admin-form {
      width: 400px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .form-item {
        height: 70px;
        width: 100%;
        margin: 10px 0;

        label {
          font-size: 16px;
          margin-bottom: 5px;
          color: #7e76768d;
          font-weight: 300;
        }

        input {
          width: 100%;
          height: 40px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          background-color: #ececec;
          border-radius: 5px;
          padding: 10px 10px;
          font-size: 18px;
        }

        button {
          width: 100%;
          height: 40px;
          border: none;
          background-color: #6358dc;
          color: #fff;
          font-size: 18px;
          border-radius: 5px;
          cursor: pointer;
        }

        .error-message {
          color: red;
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
