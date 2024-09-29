<script setup lang="ts">
import MenuLayout from './menu/MenuLayout.vue';
</script>

<template>
  <div >
    <el-container>
      <el-aside width="280px">
        <MenuLayout/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>