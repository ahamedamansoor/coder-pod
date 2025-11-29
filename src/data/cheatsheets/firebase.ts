import { Database } from 'lucide-react';

export const firebaseCheatsheet = {
  id: 'firebase',
  name: 'Firebase',
  description: 'Firebase platform commands & SDK',
  icon: Database,
  colorTheme: 'amber' as const,
  sections: [
    {
      title: 'Firebase CLI',
      commands: [
        {
          command: 'firebase login',
          description: 'Login to Firebase',
          usage: 'firebase login',
          example: 'firebase login\n# Opens browser for authentication',
        },
        {
          command: 'firebase init',
          description: 'Initialize Firebase project',
          usage: 'firebase init [feature]',
          example: 'firebase init\nfirebase init hosting\nfirebase init firestore',
        },
        {
          command: 'firebase projects:list',
          description: 'List all Firebase projects',
          usage: 'firebase projects:list',
          example: 'firebase projects:list\n# Shows all your projects',
        },
        {
          command: 'firebase use',
          description: 'Set active project',
          usage: 'firebase use project-id',
          example: 'firebase use my-app-prod\nfirebase use --add  # Add project alias',
        },
        {
          command: 'firebase deploy',
          description: 'Deploy to Firebase',
          usage: 'firebase deploy [--only feature]',
          example: 'firebase deploy\nfirebase deploy --only hosting\nfirebase deploy --only functions',
        },
        {
          command: 'firebase serve',
          description: 'Start local server',
          usage: 'firebase serve [--only feature]',
          example: 'firebase serve\nfirebase serve --only hosting\nfirebase serve --port 5001',
        },
        {
          command: 'firebase emulators:start',
          description: 'Start Firebase emulators',
          usage: 'firebase emulators:start',
          example: 'firebase emulators:start\nfirebase emulators:start --only firestore,auth',
        },
      ],
    },
    {
      title: 'Firestore - Initialize',
      commands: [
        {
          command: 'getFirestore()',
          description: 'Initialize Firestore',
          usage: 'import { getFirestore } from "firebase/firestore"',
          example: 'import { getFirestore } from "firebase/firestore";\nconst db = getFirestore(app);',
        },
        {
          command: 'initializeApp()',
          description: 'Initialize Firebase app',
          usage: 'import { initializeApp } from "firebase/app"',
          example: 'import { initializeApp } from "firebase/app";\nconst app = initializeApp(firebaseConfig);',
        },
      ],
    },
    {
      title: 'Firestore - Add Data',
      commands: [
        {
          command: 'addDoc()',
          description: 'Add document with auto ID',
          usage: 'addDoc(collection(db, path), data)',
          example: 'import { collection, addDoc } from "firebase/firestore";\n\nconst docRef = await addDoc(collection(db, "users"), {\n  name: "John Doe",\n  email: "john@example.com",\n  created: new Date()\n});',
        },
        {
          command: 'setDoc()',
          description: 'Set document with custom ID',
          usage: 'setDoc(doc(db, path, id), data)',
          example: 'import { doc, setDoc } from "firebase/firestore";\n\nawait setDoc(doc(db, "users", "user123"), {\n  name: "Jane Doe",\n  email: "jane@example.com"\n});',
        },
        {
          command: 'setDoc() merge',
          description: 'Update or create document',
          usage: 'setDoc(doc, data, { merge: true })',
          example: 'await setDoc(doc(db, "users", "user123"), {\n  lastLogin: new Date()\n}, { merge: true });  // Updates only lastLogin',
        },
      ],
    },
    {
      title: 'Firestore - Read Data',
      commands: [
        {
          command: 'getDoc()',
          description: 'Get single document',
          usage: 'getDoc(doc(db, path, id))',
          example: 'import { doc, getDoc } from "firebase/firestore";\n\nconst docSnap = await getDoc(doc(db, "users", "user123"));\nif (docSnap.exists()) {\n  console.log(docSnap.data());\n}',
        },
        {
          command: 'getDocs()',
          description: 'Get all documents in collection',
          usage: 'getDocs(collection(db, path))',
          example: 'import { collection, getDocs } from "firebase/firestore";\n\nconst querySnapshot = await getDocs(collection(db, "users"));\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, doc.data());\n});',
        },
        {
          command: 'onSnapshot()',
          description: 'Real-time listener',
          usage: 'onSnapshot(docRef, callback)',
          example: 'import { doc, onSnapshot } from "firebase/firestore";\n\nconst unsubscribe = onSnapshot(doc(db, "users", "user123"), (doc) => {\n  console.log("Current data:", doc.data());\n});\n\n// Later: unsubscribe();',
        },
      ],
    },
    {
      title: 'Firestore - Query Data',
      commands: [
        {
          command: 'where()',
          description: 'Filter documents',
          usage: 'query(collection, where(field, operator, value))',
          example: 'import { collection, query, where, getDocs } from "firebase/firestore";\n\nconst q = query(collection(db, "users"), where("age", ">", 18));\nconst querySnapshot = await getDocs(q);',
        },
        {
          command: 'orderBy()',
          description: 'Sort results',
          usage: 'query(collection, orderBy(field, direction))',
          example: 'const q = query(\n  collection(db, "users"),\n  orderBy("created", "desc")\n);',
        },
        {
          command: 'limit()',
          description: 'Limit results',
          usage: 'query(collection, limit(n))',
          example: 'const q = query(\n  collection(db, "users"),\n  orderBy("created", "desc"),\n  limit(10)\n);  // Get 10 newest users',
        },
        {
          command: 'Multiple filters',
          description: 'Combine query conditions',
          usage: 'query(collection, where(), where(), orderBy())',
          example: 'const q = query(\n  collection(db, "users"),\n  where("status", "==", "active"),\n  where("age", ">=", 18),\n  orderBy("age"),\n  limit(20)\n);',
        },
        {
          command: 'startAfter()',
          description: 'Pagination',
          usage: 'query(collection, startAfter(lastDoc))',
          example: 'const first = query(collection(db, "users"), limit(25));\nconst snapshot = await getDocs(first);\nconst lastVisible = snapshot.docs[snapshot.docs.length-1];\n\nconst next = query(\n  collection(db, "users"),\n  startAfter(lastVisible),\n  limit(25)\n);',
        },
      ],
    },
    {
      title: 'Firestore - Update/Delete',
      commands: [
        {
          command: 'updateDoc()',
          description: 'Update document fields',
          usage: 'updateDoc(doc(db, path, id), data)',
          example: 'import { doc, updateDoc } from "firebase/firestore";\n\nawait updateDoc(doc(db, "users", "user123"), {\n  name: "Updated Name",\n  "address.city": "New York"  // Nested field\n});',
        },
        {
          command: 'deleteDoc()',
          description: 'Delete document',
          usage: 'deleteDoc(doc(db, path, id))',
          example: 'import { doc, deleteDoc } from "firebase/firestore";\n\nawait deleteDoc(doc(db, "users", "user123"));',
        },
        {
          command: 'deleteField()',
          description: 'Delete field from document',
          usage: 'updateDoc(doc, { field: deleteField() })',
          example: 'import { updateDoc, deleteField } from "firebase/firestore";\n\nawait updateDoc(doc(db, "users", "user123"), {\n  email: deleteField()\n});',
        },
        {
          command: 'increment()',
          description: 'Increment numeric field',
          usage: 'updateDoc(doc, { field: increment(n) })',
          example: 'import { updateDoc, increment } from "firebase/firestore";\n\nawait updateDoc(doc(db, "posts", "post123"), {\n  views: increment(1),\n  likes: increment(-1)\n});',
        },
        {
          command: 'arrayUnion()',
          description: 'Add to array',
          usage: 'updateDoc(doc, { field: arrayUnion(items) })',
          example: 'import { updateDoc, arrayUnion } from "firebase/firestore";\n\nawait updateDoc(doc(db, "users", "user123"), {\n  tags: arrayUnion("new-tag", "another-tag")\n});',
        },
        {
          command: 'arrayRemove()',
          description: 'Remove from array',
          usage: 'updateDoc(doc, { field: arrayRemove(items) })',
          example: 'await updateDoc(doc(db, "users", "user123"), {\n  tags: arrayRemove("old-tag")\n});',
        },
      ],
    },
    {
      title: 'Firestore - Batch Operations',
      commands: [
        {
          command: 'writeBatch()',
          description: 'Batch write operations',
          usage: 'writeBatch(db)',
          example: 'import { writeBatch, doc } from "firebase/firestore";\n\nconst batch = writeBatch(db);\n\nbatch.set(doc(db, "users", "user1"), { name: "Alice" });\nbatch.update(doc(db, "users", "user2"), { age: 30 });\nbatch.delete(doc(db, "users", "user3"));\n\nawait batch.commit();',
        },
        {
          command: 'runTransaction()',
          description: 'Run transaction',
          usage: 'runTransaction(db, callback)',
          example: 'import { runTransaction, doc } from "firebase/firestore";\n\nawait runTransaction(db, async (transaction) => {\n  const docRef = doc(db, "accounts", "account123");\n  const docSnap = await transaction.get(docRef);\n  const newBalance = docSnap.data().balance - 100;\n  transaction.update(docRef, { balance: newBalance });\n});',
        },
      ],
    },
    {
      title: 'Authentication - Setup',
      commands: [
        {
          command: 'getAuth()',
          description: 'Initialize Auth',
          usage: 'import { getAuth } from "firebase/auth"',
          example: 'import { getAuth } from "firebase/auth";\nconst auth = getAuth(app);',
        },
        {
          command: 'onAuthStateChanged()',
          description: 'Listen to auth state',
          usage: 'onAuthStateChanged(auth, callback)',
          example: 'import { onAuthStateChanged } from "firebase/auth";\n\nonAuthStateChanged(auth, (user) => {\n  if (user) {\n    console.log("User logged in:", user.uid);\n  } else {\n    console.log("User logged out");\n  }\n});',
        },
      ],
    },
    {
      title: 'Authentication - Sign In/Up',
      commands: [
        {
          command: 'createUserWithEmailAndPassword()',
          description: 'Create user with email',
          usage: 'createUserWithEmailAndPassword(auth, email, password)',
          example: 'import { createUserWithEmailAndPassword } from "firebase/auth";\n\nconst userCredential = await createUserWithEmailAndPassword(\n  auth,\n  "user@example.com",\n  "password123"\n);\nconst user = userCredential.user;',
        },
        {
          command: 'signInWithEmailAndPassword()',
          description: 'Sign in with email',
          usage: 'signInWithEmailAndPassword(auth, email, password)',
          example: 'import { signInWithEmailAndPassword } from "firebase/auth";\n\nawait signInWithEmailAndPassword(\n  auth,\n  "user@example.com",\n  "password123"\n);',
        },
        {
          command: 'signInWithPopup()',
          description: 'Sign in with popup (Google, etc)',
          usage: 'signInWithPopup(auth, provider)',
          example: 'import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";\n\nconst provider = new GoogleAuthProvider();\nconst result = await signInWithPopup(auth, provider);\nconst user = result.user;',
        },
        {
          command: 'signOut()',
          description: 'Sign out user',
          usage: 'signOut(auth)',
          example: 'import { signOut } from "firebase/auth";\n\nawait signOut(auth);',
        },
        {
          command: 'sendPasswordResetEmail()',
          description: 'Send password reset email',
          usage: 'sendPasswordResetEmail(auth, email)',
          example: 'import { sendPasswordResetEmail } from "firebase/auth";\n\nawait sendPasswordResetEmail(auth, "user@example.com");',
        },
      ],
    },
    {
      title: 'Storage - Upload/Download',
      commands: [
        {
          command: 'getStorage()',
          description: 'Initialize Storage',
          usage: 'import { getStorage } from "firebase/storage"',
          example: 'import { getStorage } from "firebase/storage";\nconst storage = getStorage(app);',
        },
        {
          command: 'uploadBytes()',
          description: 'Upload file',
          usage: 'uploadBytes(ref(storage, path), file)',
          example: 'import { ref, uploadBytes } from "firebase/storage";\n\nconst storageRef = ref(storage, "images/profile.jpg");\nawait uploadBytes(storageRef, file);',
        },
        {
          command: 'uploadString()',
          description: 'Upload base64/data URL',
          usage: 'uploadString(ref, string, format)',
          example: 'import { ref, uploadString } from "firebase/storage";\n\nconst storageRef = ref(storage, "images/profile.jpg");\nawait uploadString(storageRef, base64String, "base64");',
        },
        {
          command: 'getDownloadURL()',
          description: 'Get download URL',
          usage: 'getDownloadURL(ref(storage, path))',
          example: 'import { ref, getDownloadURL } from "firebase/storage";\n\nconst url = await getDownloadURL(ref(storage, "images/profile.jpg"));',
        },
        {
          command: 'deleteObject()',
          description: 'Delete file',
          usage: 'deleteObject(ref(storage, path))',
          example: 'import { ref, deleteObject } from "firebase/storage";\n\nawait deleteObject(ref(storage, "images/old-profile.jpg"));',
        },
        {
          command: 'listAll()',
          description: 'List files in directory',
          usage: 'listAll(ref(storage, path))',
          example: 'import { ref, listAll } from "firebase/storage";\n\nconst listRef = ref(storage, "images");\nconst res = await listAll(listRef);\nres.items.forEach((itemRef) => {\n  console.log(itemRef.name);\n});',
        },
      ],
    },
    {
      title: 'Cloud Functions - Deploy',
      commands: [
        {
          command: 'functions:deploy',
          description: 'Deploy functions',
          usage: 'firebase deploy --only functions',
          example: 'firebase deploy --only functions\nfirebase deploy --only functions:myFunction',
        },
        {
          command: 'functions:log',
          description: 'View function logs',
          usage: 'firebase functions:log',
          example: 'firebase functions:log\nfirebase functions:log --only myFunction',
        },
        {
          command: 'functions:shell',
          description: 'Test functions locally',
          usage: 'firebase functions:shell',
          example: 'firebase functions:shell\n# Then call: myFunction({data: "test"})',
        },
      ],
    },
    {
      title: 'Cloud Functions - HTTP',
      commands: [
        {
          command: 'onRequest()',
          description: 'HTTP function (v2)',
          usage: 'import { onRequest } from "firebase-functions/v2/https"',
          example: 'import { onRequest } from "firebase-functions/v2/https";\n\nexport const myFunction = onRequest((req, res) => {\n  res.json({ message: "Hello World" });\n});',
        },
        {
          command: 'onCall()',
          description: 'Callable function',
          usage: 'import { onCall } from "firebase-functions/v2/https"',
          example: 'import { onCall } from "firebase-functions/v2/https";\n\nexport const addMessage = onCall(async (request) => {\n  const text = request.data.text;\n  return { result: `Added: ${text}` };\n});',
        },
      ],
    },
    {
      title: 'Cloud Functions - Triggers',
      commands: [
        {
          command: 'onDocumentCreated()',
          description: 'Firestore onCreate trigger',
          usage: 'onDocumentCreated(path, callback)',
          example: 'import { onDocumentCreated } from "firebase-functions/v2/firestore";\n\nexport const onUserCreate = onDocumentCreated(\n  "users/{userId}",\n  (event) => {\n    const data = event.data.data();\n    console.log("New user:", data.name);\n  }\n);',
        },
        {
          command: 'onDocumentUpdated()',
          description: 'Firestore onUpdate trigger',
          usage: 'onDocumentUpdated(path, callback)',
          example: 'export const onUserUpdate = onDocumentUpdated(\n  "users/{userId}",\n  (event) => {\n    const before = event.data.before.data();\n    const after = event.data.after.data();\n  }\n);',
        },
        {
          command: 'onDocumentDeleted()',
          description: 'Firestore onDelete trigger',
          usage: 'onDocumentDeleted(path, callback)',
          example: 'export const onUserDelete = onDocumentDeleted(\n  "users/{userId}",\n  (event) => {\n    const data = event.data.data();\n    // Cleanup user data\n  }\n);',
        },
      ],
    },
    {
      title: 'Hosting',
      commands: [
        {
          command: 'hosting:channel:deploy',
          description: 'Deploy to preview channel',
          usage: 'firebase hosting:channel:deploy channel-name',
          example: 'firebase hosting:channel:deploy preview\n# Creates preview URL',
        },
        {
          command: 'hosting:clone',
          description: 'Clone to another site',
          usage: 'firebase hosting:clone source:target',
          example: 'firebase hosting:clone prod:staging',
        },
      ],
    },
    {
      title: 'Realtime Database',
      commands: [
        {
          command: 'getDatabase()',
          description: 'Initialize Realtime DB',
          usage: 'import { getDatabase } from "firebase/database"',
          example: 'import { getDatabase } from "firebase/database";\nconst db = getDatabase(app);',
        },
        {
          command: 'set()',
          description: 'Write data',
          usage: 'set(ref(db, path), data)',
          example: 'import { ref, set } from "firebase/database";\n\nawait set(ref(db, "users/" + userId), {\n  username: "john",\n  email: "john@example.com"\n});',
        },
        {
          command: 'get()',
          description: 'Read data once',
          usage: 'get(ref(db, path))',
          example: 'import { ref, get } from "firebase/database";\n\nconst snapshot = await get(ref(db, "users/" + userId));\nif (snapshot.exists()) {\n  console.log(snapshot.val());\n}',
        },
        {
          command: 'onValue()',
          description: 'Listen for changes',
          usage: 'onValue(ref(db, path), callback)',
          example: 'import { ref, onValue } from "firebase/database";\n\nconst unsubscribe = onValue(ref(db, "users/" + userId), (snapshot) => {\n  console.log(snapshot.val());\n});',
        },
        {
          command: 'push()',
          description: 'Add to list with auto ID',
          usage: 'push(ref(db, path), data)',
          example: 'import { ref, push } from "firebase/database";\n\nconst newPostRef = push(ref(db, "posts"));\nawait set(newPostRef, {\n  title: "New Post",\n  content: "...",\n  timestamp: Date.now()\n});',
        },
      ],
    },
    {
      title: 'Admin SDK - Firestore',
      commands: [
        {
          command: 'admin.firestore()',
          description: 'Initialize Admin Firestore',
          usage: 'const db = admin.firestore()',
          example: 'import * as admin from "firebase-admin";\n\nadmin.initializeApp();\nconst db = admin.firestore();',
        },
        {
          command: 'collection().add()',
          description: 'Add document (Admin)',
          usage: 'db.collection(path).add(data)',
          example: 'await db.collection("users").add({\n  name: "John",\n  email: "john@example.com",\n  created: admin.firestore.FieldValue.serverTimestamp()\n});',
        },
        {
          command: 'doc().get()',
          description: 'Get document (Admin)',
          usage: 'db.collection(path).doc(id).get()',
          example: 'const doc = await db.collection("users").doc("user123").get();\nif (doc.exists) {\n  console.log(doc.data());\n}',
        },
      ],
    },
    {
      title: 'Security Rules',
      commands: [
        {
          command: 'Firestore Rules',
          description: 'Basic Firestore security',
          usage: 'firestore.rules',
          example: 'rules_version = \'2\';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /users/{userId} {\n      allow read, write: if request.auth != null && request.auth.uid == userId;\n    }\n  }\n}',
        },
        {
          command: 'Storage Rules',
          description: 'Basic Storage security',
          usage: 'storage.rules',
          example: 'rules_version = \'2\';\nservice firebase.storage {\n  match /b/{bucket}/o {\n    match /users/{userId}/{allPaths=**} {\n      allow read, write: if request.auth != null && request.auth.uid == userId;\n    }\n  }\n}',
        },
      ],
    },
  ],
};
