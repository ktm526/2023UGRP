const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  process.env.GOOGLE_API_KEY = 'AIzaSyAMIHpHjV89hksmu9bAcmN6zQZmRqfI7xQ'
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    webPreferences: {
        nodeIntegration: true, // Add this line
        webSecurity: false, // Disable web security
      },
  });

  // Load your HTML file (Driving.html)
  mainWindow.loadFile('Driving.html');

  // Close the app when the main window is closed
  mainWindow.on('closed', () => {
    app.quit();
  });
});
