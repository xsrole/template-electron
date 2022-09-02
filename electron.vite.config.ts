import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/utils']
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        external: ['@electron-toolkit/preload']
      }
    }
  },
  renderer: {
    resolve: {
      alias: {
        '@@': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      Unocss(),
      Icons({ compiler: 'vue3', autoInstall: true }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: 'src/typings/components.d.ts',
        resolvers: [NaiveUiResolver()]
      }),
      AutoImport({
        /* options */
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/ // .vue
        ],
        imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
        dirs: ['src/hooks', 'src/utils', 'src/api'],
        dts: 'src/typings/auto-import.d.ts'
      })
    ]
  }
})
