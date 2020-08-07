import { BrowserWindow } from 'electron';
import { ProductService } from './services/product';

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;
  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new Main.BrowserWindow({
      width: 1200,
      height: 1000,
      webPreferences: { nodeIntegration: true },
    });

    if (process.env.NODE_ENV === 'dev') {
      Main.mainWindow.loadURL('http://localhost:4200');
      Main.mainWindow.webContents.openDevTools();
    } else {
      Main.mainWindow.loadURL('file://' + __dirname + '/../index.html');
    }

    Main.initiateServices();
    Main.mainWindow.on('closed', Main.onClose);
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on('window-all-closed', Main.onWindowAllClosed);
    Main.application.on('ready', Main.onReady);
  }

  static initiateServices() {
    ProductService.getInstance();
  }
}
