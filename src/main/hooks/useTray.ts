import { App, Tray, Menu, BrowserWindow, ipcMain, MenuItem, T } from 'electron';
import { join } from 'path';
const useTray = (app: App, mainWindow: BrowserWindow) => {
  const trayMenu = [
    {
      label: '显示',
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: '退出',
      click: () => {
        app.quit();
      },
    },
  ];
  const iconPath = join(__dirname, '../../build/icon.png');
  const appTray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate(trayMenu);
  appTray.setToolTip('u-music');
  ipcMain.on('tray-tooltip-update', (event, val) => {
    appTray.setToolTip(val);
  });
  appTray.setContextMenu(contextMenu);
  appTray.on('click', () => {
    mainWindow.show();
  });
  return appTray;
};
export default useTray;
