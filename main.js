const path = require("path");
const { app, BrowserWindow } = require("electron");

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Img resizer",
    width: 500,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

app.whenReady().then(() => {
  createMainWindow();
});
