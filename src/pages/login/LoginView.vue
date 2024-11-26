<script setup lang="ts">
import ImgIntro from '@/assets/images/login-intro.png';
import Logo from '@/assets/images/logo.png';
import { WEBSITE_NAME } from '@/utils/const';
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { showToast } from '@/utils/helper';
import { useMutateLogin } from '@/services/auth.service';

interface RuleForm {
  username: string;
  password: string;
}

const ruleFormRef = ref<FormInstance>();
const form = reactive({
  username: '',
  password: ''
});

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Vui lòng nhập tài khoản', trigger: 'blur' },
    { min: 1, max: 50, message: 'Từ 1 đến 50 ký tự', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur' },
    { min: 1, max: 50, message: 'Từ 1 đến 50 ký tự', trigger: 'blur' }
  ]
});

const { mutate: loginMutate } = useMutateLogin();

const onSubmit = async (formEl?: FormInstance) => {
  if (!formEl) {
    return;
  }
  await formEl.validate((valid) => {
    if (valid) {
      const { username, password } = form;
      loginMutate({ username, password });
    } else {
      showToast({
        message: 'Đã có lỗi xảy ra',
        type: 'error'
      });
    }
  });
};
</script>

<template>
  <div class="flex h-screen">
    <div class="w-1/3 h-full">
      <img :src="ImgIntro" class="w-full h-full object-cover" alt="login" />
    </div>
    <div class="w-2/3 flex items-center justify-center">
      <div class="flex items-center justify-center w-[40%] flex-col">
        <div class="flex items-center gap-4">
          <el-image :src="Logo" class="w-14 h-14" />
          <h1 class="font-bold text-[32px]">CMS {{ WEBSITE_NAME }}</h1>
        </div>

        <div class="mt-10 w-full">
          <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules">
            <el-form-item prop="username">
              <label><span class="text-red-600">*</span>Tài khoản</label>
              <el-input v-model="form.username" size="large" />
            </el-form-item>
            <el-form-item prop="password">
              <label><span class="text-red-600">*</span>Mật khẩu</label>
              <el-input type="password" v-model="form.password" size="large" show-password />
            </el-form-item>
            <div class="flex justify-center mt-8">
              <el-form-item>
                <el-button type="primary" class="rounded-lg px-10" size="large" @click="onSubmit(ruleFormRef)"
                  >Đăng nhập</el-button
                >
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
