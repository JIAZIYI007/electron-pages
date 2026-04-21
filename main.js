const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // 可选：隐藏默认菜单栏
    autoHideMenuBar: true,
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);