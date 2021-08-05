// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

  // https://github.com/amaurym/cra-lerna-electron/blob/master/packages/crale-electron/src/main/index.ts
  // https://github.com/amaurym/cra-lerna-electron/blob/master/packages/crale-electron/src/main/utils/staticPath.ts
  const CRA_DEV_URL = 'http://localhost:3000/';

  // // Is our app packaged in a binary or still in Electron?
  // const appIsPackaged = !process.defaultApp;
  // /**
  //  * Get the path to the `static` folder.
  //  * This is a temporary hack, waiting for the 2 issues to be fixed.
  //  *
  //  * @see https://github.com/electron-userland/electron-webpack/issues/52
  //  * @see https://github.com/electron-userland/electron-webpack/issues/157
  //  */
  // const staticPath = appIsPackaged
  //   ? __dirname.replace(/app\.asar$/, 'build')
  //   : path.join(process.cwd(), 'build');
  
  // https://github.com/sindresorhus/electron-is-dev/blob/main/index.js
  if (typeof electron === 'string') {
    throw new TypeError('Not running in an Electron environment!');
  }
  const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
  const getFromEnv = Number.parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
  const isElectronDev = isEnvSet ? getFromEnv : !app.isPackaged;

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: isElectronDev ? './public/preload.js' :  path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
      webSecurity: false,
    }
  })
  mainWindow.loadURL(
    isElectronDev ? CRA_DEV_URL : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  // mainWindow.loadURL('http://localhost:3000/')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.