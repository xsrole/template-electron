import { app, App, shell, BrowserWindow, ipcMain, IpcMainEvent, IpcMain, Tray } from 'electron'

const windowIpc = (mainWindow: BrowserWindow) => {
    ipcMain.on('window-hide', () => {
        mainWindow.hide()
    })
    ipcMain.on('window-screen-min', () => {
        mainWindow.minimize()
    })
    ipcMain.on('window-screen-full', () => {
        mainWindow.setFullScreen(true)
    })
    ipcMain.on('window-screen-exitfull', () => {
        mainWindow.setFullScreen(true)
    })
    ipcMain.on('window-screen-toggle', () => {
        mainWindow.setFullScreen(!mainWindow.fullScreen)
    })
}
const appIpc = (app: App) => {
    ipcMain.on('app-quit', () => {
        app.quit()
    })
}
const trayIpc = (tray: Tray) => {

}
const useIpcMain = (app: App, mainWindow: BrowserWindow, tray: Tray) => {
    windowIpc(mainWindow)
    appIpc(app)
    trayIpc(tray)
}
export default useIpcMain