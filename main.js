const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Membuat jendela browser baru.
  const win = new BrowserWindow({
    width: 1200, // Anda bisa sesuaikan ukurannya
    height: 800,
    webPreferences: {
      // Ini adalah konfigurasi sederhana agar semua JavaScript Anda 
      // yang ada di 'index.html' (seperti localStorage) tetap berfungsi.
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Memuat file index.html Anda ke dalam jendela.
  win.loadFile('index.html');

  // Opsional: Anda bisa menghapus baris ini jika tidak ingin menu bar (File, Edit, etc.)
  // win.setMenu(null); 
}

// Metode ini akan dipanggil ketika Electron selesai inisialisasi
// dan siap untuk membuat jendela browser.
app.whenReady().then(createWindow);

// Keluar dari aplikasi saat semua jendela ditutup (kecuali di macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Di macOS, buat jendela baru jika tidak ada yang terbuka saat ikon dock diklik.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});