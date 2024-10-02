<script setup lang="ts">
import DoubleArrowLeft from '@/assets/icons/DoubleArrowLeft.vue';
import DoubleArrowRight from '@/assets/icons/DoubleArrowRight.vue';
import Logo from '@/assets/images/logo.png';
import { storeToRefs } from 'pinia';
import HeaderLayout from './header/HeaderLayout.vue';
import { useOpenMenuStore } from './layout.state';
import MenuLayout from './menu/MenuLayout.vue';

const menuStore = useOpenMenuStore()
const {isOpenMenu, menuWidth} = storeToRefs(menuStore)
const {toggleMenu} = menuStore

</script>

<template>
  <div>
    <el-container>
      <el-aside :width="menuWidth" style="background-color: #001529;">
        <div style="padding: 0 15px; height: 60px; border-bottom: 1px solid #00284d;">
          <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: space-between;">
            <RouterLink to="/" v-if="isOpenMenu">
              <div style="display: flex; align-items: center; gap: 10px;">
                <el-image style="width: 30px; height: 30px" :src="Logo" fit="cover" />
                <p style="color: #FFF;">CMS Vue</p>
              </div>
            </RouterLink>
            <button @click="toggleMenu" type="button" style="color: #8bb9f9; background-color: transparent; border: none; cursor: pointer;">
              <span v-if="isOpenMenu">
                <DoubleArrowLeft/>
              </span>
              <span v-if="!isOpenMenu">
                <DoubleArrowRight/>
              </span>
            </button>
          </div>
        </div>
        <MenuLayout />
      </el-aside>
      <el-container>
        <el-header style="padding: 0;">
          <HeaderLayout/>
        </el-header>
        <el-main style="padding: 25px; background-color: #f5f5f5;">
          <div style="background-color: #FFF; border-radius: 10px; padding: 15px 17px; min-height: calc(100vh - 150px);">
            Main
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>