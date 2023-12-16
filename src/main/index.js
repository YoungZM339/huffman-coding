import { app, BrowserWindow, ipcMain, shell } from "electron";
import { join } from "path";
import { electronApp, is, optimizer } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";

const addon = require(join(__dirname, "../../resources/addon.node"));
const { dialog } = require("electron");
const fs = require("fs");

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId("com.electron");

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createWindow();

  app.on("activate", function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  ipcMain.handle("get-encoding-table", (event, str) => {
    return addon.getEncodingTable(str);
  });

  ipcMain.handle("compress-data", (event, str, encodingTable) => {
    return addon.compressData(str, encodingTable);
  });

  ipcMain.handle("decompress-data", (event, compressedData, encodingTable) => {
    return addon.decompressData(compressedData, encodingTable);
  });

  ipcMain.on("download-encoding-table", (event, jsonString) => {
    saveEncodingTable(jsonString);
  });

  ipcMain.handle("upload-encoding-table", (event) => {
    return uploadEncodingTable();
  });

  ipcMain.on("download-text-file", (event, jsonString) => {
    downloadTextFile(jsonString);
  });

  ipcMain.handle("upload-text-file", (event) => {
    return uploadTextFile();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
function saveEncodingTable(json_string) {
  const filePath = dialog.showSaveDialogSync(mainWindow, {
    title: "Save Encoding Table",
    defaultPath: "EncodingTable.json",
    filters: [{ name: "JSON Files", extensions: ["json"] }]
  });

  if (filePath) {
    try {
      fs.writeFileSync(filePath, json_string);
    } catch (error) {
      console.error("Error saving encoding table:", error);
    }
  }
}

function uploadEncodingTable() {
  const filePath = dialog.showOpenDialogSync(mainWindow, {
    title: "Upload Encoding Table",
    defaultPath: "EncodingTable.json",
    filters: [{ name: "JSON Files", extensions: ["json"] }]
  });

  if (filePath) {
    try {
      return fs.readFileSync(filePath[0], "utf8");
    } catch (error) {
      console.error("Error uploading encoding table:", error);
    }
  }
}

function uploadTextFile() {
  const filePath = dialog.showOpenDialogSync(mainWindow, {
    title: "Upload Text File",
    defaultPath: "TextFile.txt",
    filters: [{ name: "Text Files", extensions: ["txt"] }]
  });

  if (filePath) {
    try {
      return fs.readFileSync(filePath[0], "utf8");
    } catch (error) {
      console.error("Error uploading encoding table:", error);
    }
  }
}

function downloadTextFile(pure_string) {
  const filePath = dialog.showSaveDialogSync(mainWindow, {
    title: "Download Text File",
    defaultPath: "TextFile.txt",
    filters: [{ name: "Text Files", extensions: ["txt"] }]
  });

  if (filePath) {
    try {
      fs.writeFileSync(filePath, pure_string);
    } catch (error) {
      console.error("Error saving encoding table:", error);
    }
  }
}
