const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");

  // Opsional: Anda bisa menghapus baris ini jika tidak ingin menu bar (File, Edit, etc.)
  // win.setMenu(null);
}

// Metode ini akan dipanggil ketika Electron selesai inisialisasi
// dan siap untuk membuat jendela browser.
app.whenReady().then(createWindow);

// Keluar dari aplikasi saat semua jendela ditutup (kecuali di macOS).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Di macOS, buat jendela baru jika tidak ada yang terbuka saat ikon dock diklik.
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
