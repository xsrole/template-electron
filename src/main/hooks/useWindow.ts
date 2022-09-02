import { shell, BrowserWindow } from 'electron'
import { is } from '@electron-toolkit/utils'
import path from 'path'
const useWindow = (): BrowserWindow => {
    const window = new BrowserWindow({
        width: 960,
        height: 720,
        show: false,
        autoHideMenuBar: true,
        frame: false,
        ...(process.platform === 'linux'
            ? {
                icon: path.join(__dirname, '../../build/icon.png')
            }
            : {}),
        webPreferences: {
            preload: path.join(__dirname, '../preload/index.js')
        }
    })
    window.on('ready-to-show', () => {
        window.show()
    })

    window.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        window.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
        window.loadFile(path.join(__dirname, '../renderer/index.html'))
    }
    return window
}
export default useWindow