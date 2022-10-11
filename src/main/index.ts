import { app, shell, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';
import { useIpcMain, useApp, useVueDevTools, useStore, useTray } from './hooks';

const init = async () => {
  const { app, mainWindow } = await useApp();
  const tray = useTray(app, mainWindow);
  useVueDevTools(app, mainWindow);
  useIpcMain(app, mainWindow, tray);
  useStore();
};
init();
