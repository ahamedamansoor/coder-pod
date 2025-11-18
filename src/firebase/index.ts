'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
    const isConfigAvailable = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;

    if (!getApps().length) {
        // When running in a non-browser environment (like during the build process),
        // Firebase App Hosting environment variables are not available.
        // We must initialize with the config object.
        const isBrowser = typeof window !== 'undefined';
        if (!isBrowser) {
            return getSdks(initializeApp(firebaseConfig));
        }

        // In the browser, we attempt to initialize without arguments first,
        // to leverage Firebase App Hosting's automatic configuration.
        let firebaseApp;
        try {
            firebaseApp = initializeApp();
        } catch (e) {
            // Fallback to the config object if automatic initialization fails.
            if (process.env.NODE_ENV === "production") {
                console.warn('Automatic initialization failed. Falling back to firebase config object.', e);
            }
            firebaseApp = initializeApp(firebaseConfig);
        }

        const auth = getAuth(firebaseApp);
        const firestore = getFirestore(firebaseApp);

        // If in development, connect to emulators
        if (process.env.NODE_ENV === 'development') {
            // Check if emulators are already connected to avoid re-connecting
            // @ts-ignore
            if (!auth.emulatorConfig) {
              connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
            }
            // @ts-ignore
            if (!firestore.emulator) {
              connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
            }
        }

        return { firebaseApp, auth, firestore };
    }

    // If already initialized, return the SDKs with the already initialized App
    return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
