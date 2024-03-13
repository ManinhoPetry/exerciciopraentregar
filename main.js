const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({

    });
    win.loadFile("HTML/index.html");
}

app.whenReady().then(createWindow);