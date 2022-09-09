<script setup lang="ts">
import Menu from './Menu.vue';
import HeaderBar from './HeaderBar.vue';
import { useAppStore } from '~/stores';
const { darkMode } = storeToRefs(useAppStore());
</script>
<template>
  <div wfull hfull>
    <HeaderBar />
    <naive-provider :dark="darkMode">
      <div wfull hfull flex-center bg="white dark:gray-900">
        <div max-w-xl hfull flex-center select-none flex="col">
          <slot />
          <Menu />
        </div>
      </div>
    </naive-provider>
  </div>
</template>
<style scoped lang="less"></style>
