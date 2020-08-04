import { app, BrowserWindow, screen, net, ipcMain } from 'electron';
import { ProductService } from './services/product';

const path = require('path');
const url = require('url');
require('electron-reload')(__dirname + '/app/index.html', {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});
let win: BrowserWindow;
function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: { nodeIntegration: true },
  });
  // load the dist folder from Angular
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, '/dist/index.html'),
  //     protocol: 'file:',
  //     slashes: true,
  //   })
  // );
  win.loadURL('http://localhost:4200');
  const productService = ProductService.getInstance();

  // The following is optional and will open the DevTools:
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}
// app.on('ready', createWindow);
// on macOS, closing the window doesn't quit the app

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(createWindow);
