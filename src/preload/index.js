import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}

// Expose a method to the renderer process
contextBridge.exposeInMainWorld("huffmanAPI", {
  getEncodingTable: async (str) => {
    try {
      return await ipcRenderer.invoke("get-encoding-table", str);
    } catch (error) {
      console.error("Error invoking getEncodingTable:", error);
      throw error;
    }
  },
  compressData: async (str, encodingTable) => {
    try {
      return await ipcRenderer.invoke("compress-data", str, encodingTable);
    } catch (error) {
      console.error("Error invoking compressData:", error);
      throw error;
    }
  },
  decompressData: async (compressedData, encodingTable) => {
    try {
      return await ipcRenderer.invoke("decompress-data", compressedData, encodingTable);
    } catch (error) {
      console.error("Error invoking decompressData:", error);
      throw error;
    }
  },
  saveEncodingTable: (jsonString) => {
    try {
      return ipcRenderer.send("download-encoding-table", jsonString);
    } catch (error) {
      console.error("Error invoking downloadEncodingTable:", error);
      throw error;
    }
  },
  uploadEncodingTable: async () => {
    try {
      return await ipcRenderer.invoke("upload-encoding-table");
    } catch (error) {
      console.error("Error invoking uploadEncodingTable:", error);
      throw error;
    }
  },
  saveTextFile: (pure_string) => {
    try {
      return ipcRenderer.send("download-text-file", pure_string);
    } catch (error) {
      console.error("Error invoking downloadTextFile:", error);
      throw error;
    }
  },
  uploadTextFile: async () => {
    try {
      return await ipcRenderer.invoke("upload-text-file");
    } catch (error) {
      console.error("Error invoking uploadTextFile:", error);
      throw error;
    }
  }
});



