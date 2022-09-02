<script setup lang="ts">
import { NaiveProvider } from '@@/components'
</script>

<template>
  <router-view v-slot="{ Component }">
    <naive-provider>
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </naive-provider>
  </router-view>
</template>

<style lang="less">
@import './assets/css/styles.less';
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: scale(1.05);
  opacity: 0;
}
</style>
