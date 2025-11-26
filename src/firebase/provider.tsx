
'use client';

import React, {
  createContext, useContext, useMemo, ReactNode, useEffect, useState
} from 'react';
import {
  getAuth, onIdTokenChanged, User, Auth
} from 'firebase/auth';
import {
  getFirestore, Firestore
} from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { toast } from 'sonner';
import { initializeFirebase } from '.';
import { firebaseConfig } from './config';

interface FirebaseContextState {
  areServicesAvailable: boolean;
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

interface FirebaseServicesAndUser {
  firebaseApp: FirebaseApp;
  firestore: Firestore;
  auth: Auth;
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

const FirebaseContext = createContext<FirebaseContextState | undefined>(undefined);

interface FirebaseProviderProps {
  children: ReactNode;
}

const FirebaseErrorListener: React.FC = () => {
  const { userError } = useFirebase();

  useEffect(() => {
    if (userError) {
      console.error("Firebase user auth error:", userError);
      toast.error("There was an issue with authentication. Please try again.", {
        description: userError.message,
      });
    }
  }, [userError]);

  return null;
};

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({ children }) => {
  const [{ firebaseApp, firestore, auth }, setFirebaseServices] = useState<{ firebaseApp: FirebaseApp | null, firestore: Firestore | null, auth: Auth | null }>({ firebaseApp: null, firestore: null, auth: null });
  const [userAuthState, setUserAuthState] = useState<{ user: User | null, isUserLoading: boolean, userError: Error | null }>({ user: null, isUserLoading: true, userError: null });

  useEffect(() => {
    const { firebaseApp, firestore, auth } = initializeFirebase(firebaseConfig);
    setFirebaseServices({ firebaseApp, firestore, auth });
  }, []);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onIdTokenChanged(auth, (user) => {
      setUserAuthState({ user, isUserLoading: false, userError: null });
    }, (error) => {
      setUserAuthState({ user: null, isUserLoading: false, userError: error });
    });

    return () => unsubscribe();
  }, [auth]);

  const contextValue = useMemo((): FirebaseContextState => {
    const servicesAvailable = !!(firebaseApp && firestore && auth);
    return {
      areServicesAvailable: servicesAvailable,
      firebaseApp: servicesAvailable ? firebaseApp : null,
      firestore: servicesAvailable ? firestore : null,
      auth: servicesAvailable ? auth : null,
      user: userAuthState.user,
      isUserLoading: userAuthState.isUserLoading,
      userError: userAuthState.userError,
    };
  }, [firebaseApp, firestore, auth, userAuthState]);

  return (
    <FirebaseContext.Provider value={contextValue}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = (): FirebaseServicesAndUser => {
  const context = useContext(FirebaseContext);

  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider.');
  }

  if (!context.areServicesAvailable || !context.firebaseApp || !context.firestore || !context.auth) {
    throw new Error('Firebase core services not available. Check FirebaseProvider props.');
  }

  return {
    firebaseApp: context.firebaseApp,
    firestore: context.firestore,
    auth: context.auth,
    user: context.user,
    isUserLoading: context.isUserLoading,
    userError: context.userError,
  };
};

export const useAuth = (): Auth => {
  const { auth } = useFirebase();
  return auth;
};

export const useFirestore = (): Firestore => {
  const { firestore } = useFirebase();
  return firestore;
};

export const useFirebaseApp = (): FirebaseApp => {
  const { firebaseApp } = useFirebase();
  return firebaseApp;
};

export const useUser = () => {
  const {
    user, isUserLoading, userError
  } = useFirebase();
  return {
    user, isUserLoading, userError
  };
};
