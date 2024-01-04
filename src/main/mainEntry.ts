import process from 'node:process'
import { BrowserWindow, app } from 'electron'
import { CustomScheme } from './CustomScheme'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

let mainWindow: BrowserWindow

app.whenReady().then(() => {
  const config = {}
  mainWindow = new BrowserWindow(config)
  // mainWindow.webContents.openDevTools({ mode: 'undocked' })

  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2])
  }
  else {
    CustomScheme.registerScheme()
    mainWindow.loadURL(`app://index.html`)
  }
})
