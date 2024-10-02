<script setup lang="ts">
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import HomeIcon from '@/assets/icons/home.svg';
import UserIcon from '@/assets/images/user.png';
</script>

<template>
  <div style="padding: 0 25px; height: 60px; display: flex; align-items: center; justify-content: space-between;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <el-image style="width: 18px; height: 18px" :src="HomeIcon" fit="cover" />
      <el-image style="width: 15px; height: 15px" :src="ArrowRightIcon" fit="cover" />
      <p style="font-size: 14px; font-weight: 500;">Phản hồi</p>
    </div>

    <div>
      <el-popover
        placement="bottom"
        trigger="click"
        :width="280"
        :show-arrow="false"
        popper-style="padding: 0"
      >
        <template #reference>
          <el-button style="padding: 20px 18px; border-radius: 8px; background-color: #f2f2f2;">
            <el-image style="width: 26px; height: 26px" :src="UserIcon" fit="cover" />
            <p style="margin-left: 8px; font-weight: 500;">Administrator</p>
          </el-button>
        </template>
        <div>
          <div style="display: flex; align-items: center; padding: 5px 10px; background-color: #1E3B57;">
            <el-image style="width: 36px; height: 36px" :src="UserIcon" fit="cover" />
            <p style="margin-left: 14px; font-weight: 600; color: #FFF">Administrator</p>
          </div>

          <div style="margin: 20px 16px;">
            <el-button type="danger">Đăng xuất</el-button>
          </div>
        </div>
      </el-popover>
    </div>
  </div>
</template>