<script setup lang="ts">
const handleMini = () => {
  window.electron.ipcRenderer.send('window-screen-min');
};
const handleToggleFull = () => {
  window.electron.ipcRenderer.send('window-screen-toggle');
};
const handleQuit = () => {
  window.electron.ipcRenderer.send('app-quit');
};
</script>
<template>
  <header wfull h6 fixed flex>
    <div mlauto h6 flex items-center>
      <div class="btn" @click="handleMini">
        <i i-ri-subtract-fill></i>
      </div>
      <div class="btn" @click="handleToggleFull">
        <i i-ri-fullscreen-fill></i>
      </div>
      <div
        class="btn"
        hover="!bg-rose5 text-white dark:!bg-rose9"
        @click="handleQuit"
      >
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
.btn {
  @apply w10 h6 flex-center bg-transparent transition-color hover:(bg-gray3) dark:(bg-transparent hover:bg-dark3);
}
</style>
