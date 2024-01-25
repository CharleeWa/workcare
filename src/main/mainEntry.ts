import process from 'node:process'
import { BrowserWindow, app } from 'electron'
import { CustomScheme } from './CustomScheme'
import { CommonWindowEvent } from './CommonWindowEvent'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

app.commandLine.appendSwitch('disable-http-cache')

app.on('browser-window-created', (_e, win) => {
  CommonWindowEvent.regWinEvent(win)
})

let mainWindow: BrowserWindow

app.whenReady().then(() => {
  const config = {
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 400,
    show: false,
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
    mainWindow.webContents.openDevTools({ mode: 'undocked' })
  }
  else {
    CustomScheme.registerScheme()
    mainWindow.loadURL(`app://index.html`)
  }

  CommonWindowEvent.listen()
  CommonWindowEvent.regWinEvent(mainWindow)
})
