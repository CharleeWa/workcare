import process from 'node:process'
import { BrowserWindow, app } from 'electron'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

let mainWindow: BrowserWindow

app.whenReady().then(() => {
  const config = {}
  mainWindow = new BrowserWindow(config)
  // mainWindow.webContents.openDevTools({ mode: 'undocked' })
  mainWindow.loadURL(process.argv[2])
})
