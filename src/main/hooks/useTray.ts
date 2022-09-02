import { App, Tray, Menu, BrowserWindow, ipcMain, MenuItem } from 'electron'
import { join } from 'path'
const useTray = (window: BrowserWindow, app: App) => {
    const trayMenu = [
        {
            label: '退出',
            click: () => {
                app.quit()
            }
        }
    ]
    const iconPath = join(__dirname, '../../build/icon.png')
    const setTray = () => {
        console.log('setTray');

        const appTray = new Tray(iconPath)
        const contextMenu = Menu.buildFromTemplate(trayMenu)
        window.hide()
        appTray.setToolTip('tooltip')
        appTray.setContextMenu(contextMenu)
        appTray.on('click', () => {
            window.show()
            appTray.destroy()
        })
    }
    ipcMain.on('hide-window', setTray)
}
export default useTray