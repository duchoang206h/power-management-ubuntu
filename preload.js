const { contextBridge, ipcRenderer } = require('electron');
// expose ipMain
contextBridge.exposeInMainWorld('handle', {
  setBatteryTurnOff : (minute) => ipcRenderer.invoke('handle:batteryTurnOff', minute),
  setPluggedInTurnOn: (minute) => ipcRenderer.invoke('handle:pluggedInTurnOn', minute),
  setBatterySleep: (minute) => ipcRenderer.invoke('handle:batterySleep', minute),
  setPluggedInSleep: (minute) => ipcRenderer.invoke('handle:pluggedInSleep', minute),
  setPowerMode: (mode) => ipcRenderer.invoke('handle:powerMode', mode),
  setBatterySaveOne: (minute) => ipcRenderer.invoke('handle:batterySaveOn', minute),
  setBatteryUsage: (mode) => ipcRenderer.invoke('handle:batteryUsage', mode)
})
contextBridge.exposeInMainWorld('system', {
  getCurrentBrightness : () => ipcRenderer.invoke('system:getCurrentBrightness'),
})
