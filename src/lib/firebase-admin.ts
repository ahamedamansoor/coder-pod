import * as admin from 'firebase-admin';

let app: admin.app.App;

export function initFirebase() {
  try {
    // Check if the app is already initialized
    app = admin.app();
  } catch (e) {
    // If not initialized, initialize it now.
    // When running in a Google Cloud environment (like App Hosting),
    // the SDK automatically discovers service account credentials.
    app = admin.initializeApp();
  }
  return app;
}

// Initialize on load so other files can import the initialized app.
initFirebase();

export function getAdminApp() {
  if (!app) {
    return initFirebase();
  }
  return app;
}
