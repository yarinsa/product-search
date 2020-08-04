"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var product_1 = require("./services/product");
var path = require('path');
var url = require('url');
require('electron-reload')(__dirname + '/app/index.html', {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
var win;
function createWindow() {
    var _a = electron_1.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    win = new electron_1.BrowserWindow({
        width: width,
        height: height,
        webPreferences: { nodeIntegration: true }
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
    var productService = product_1.ProductService.getInstance();
    // The following is optional and will open the DevTools:
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
// app.on('ready', createWindow);
// on macOS, closing the window doesn't quit the app
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.whenReady().then(createWindow);
