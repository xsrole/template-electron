<script setup lang="ts" name="">
import HelloWorld from '@@/components/HelloWorld.vue'
import { useAppStore } from '@@/store'
const appStore = useAppStore()
</script>
<template>
  <div flex="~ col 1" items="center" justify="center" gap="3">
    <HelloWorld />
    <p text="2xl">{{ appStore.count }}</p>
    <n-button type="primary" size="medium" @click="appStore.count++">加</n-button>
  </div>
</template>
<style scoped lang="less"></style>
