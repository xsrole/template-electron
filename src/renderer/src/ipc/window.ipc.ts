const fullscreenToggle = () => window.electron.ipcRenderer.send('window-screen-toggle');
const miniScreen = () => window.electron.ipcRenderer.send('window-screen-min');
const hideWindow = () => window.electron.ipcRenderer.send('window-hide');
export const windowIpc = {
    fullscreenToggle,
    miniScreen,
    hideWindow
}