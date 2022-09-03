import { app, shell, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { useTray, useWindow, useApp } from './hooks'

const init = async () => {
  const { app, mainWindow } = await useApp(useWindow)
  useTray(mainWindow, app)
}
init()