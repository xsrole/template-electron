<script setup lang="ts"></script>
<template>
  <header wfull h6 fixed flex>
    <div mlauto h6 flex items="center" style="">
      <div w10 hfull flex-center bg="white hover:gray-4">
        <i i-ri-subtract-fill></i>
      </div>
      <div>
        <i i-ri-fullscreen-fill></i>
      </div>
      <div>
        <i i-ri-close-fill></i>
      </div>
    </div>
  </header>
</template>
<style scoped lang="less">
header {
  -webkit-app-region: drag;
  > * {
    -webkit-app-region: no-drag;
  }
}
</style>
