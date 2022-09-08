const quitApp = () => window.electron.ipcRenderer.send('app-quit');
export const appIpc = {
    quitApp
}