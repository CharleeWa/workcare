import process from 'node:process'
import { BrowserWindow, app } from 'electron'
import { CustomScheme } from './CustomScheme'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

let mainWindow: BrowserWindow

app.whenReady().then(() => {
  const config = {
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 400,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
      contextIsolation: false,
      webviewTag: true,
      spellcheck: false,
      disableHtmlFullscreenWindowResize: true,
    },
  }
  mainWindow = new BrowserWindow(config)

  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])
    // mainWindow.webContents.openDevTools({ mode: 'undocked' })
  }
  else {
    CustomScheme.registerScheme()
    mainWindow.loadURL(`app://index.html`)
  }
})
