<script lang="ts" setup>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { reactive, ref } from 'vue';
const loginForm = reactive({
  username: '',
  password: '',
});

const hasCount = ref(false);

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
</script>

<template>
  <div class="container">
    <div class="container-left">
    </div>
    <div class="container-right">
      <div class="login-form" v-if="hasCount">
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="formRef"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="register-form" v-else></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

