<script lang="ts" setup>
import { isEmpty } from 'lodash';
import { storeToRefs } from 'pinia';
import { useOpenMenuStore } from '../layout.state';
import { MENU_DATA } from './menu.data';

const menuStore = useOpenMenuStore()
const {isOpenMenu, menuWidth} = storeToRefs(menuStore)

</script>

<template>
  <el-menu
    default-active="1-1"
    background-color="#001529"
    text-color="#ccc"
    active-text-color="#8bb9f9"
    class="el-menu-cms"
    show-timeout="0"
    hide-timeout="0"
    :style="{width: menuWidth}"
    :collapse="!isOpenMenu"

  >
    <div v-for="item in MENU_DATA" :key="item.index">
      <el-menu-item v-if="isEmpty(item.children)" :index="item.index" >
        <el-icon>
          <el-image style="width: 16px; height: 16px" :src="item.icon" fit="cover" />
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>

      <el-sub-menu v-else :index="item.index">
        <template #title >
          <el-icon>
            <el-image style="width: 16px; height: 16px" :src="item.icon" fit="cover" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>

        <template v-for="subItem in item.children" :key="subItem.index">
          <el-menu-item :index="subItem.index">{{ subItem.title }}</el-menu-item>
        </template>
      </el-sub-menu>
    </div>
  </el-menu>
</template>



<style scoped>
.el-menu-cms {
  min-height: calc(100vh - 60px);
  border-right: 0px;
}

.el-menu-item {
  height: 45px;
}

ul > .el-menu-item {
  background-color: #000C17;
  padding-left: 48px!important;
}

.el-sub-menu__title {
  height: 45px;
}
</style>