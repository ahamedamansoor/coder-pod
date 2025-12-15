# Notes Debugging Guide

## Common Issues & Solutions

### 1. Check if you're logged in
- Look for your profile picture in the top-right corner
- If not logged in, click "Login" and sign in

### 2. Check Browser Console for Errors
- Press F12 to open Developer Tools
- Go to the Console tab
- Look for error messages (especially ones mentioning "permission", "auth", or "firestore")

### 3. Verify Firestore Rules are Deployed
Run this command from the project directory:
```bash
firebase deploy --only firestore:rules
```

### 4. Test with Admin Account
If you have admin email (ahamedamansoor@gmail.com, ahamedamansoor.dev@gmail.com, or tech.vishnukumar@gmail.com), try logging in with that.

### 5. Check Network Tab
- Open F12 Developer Tools
- Go to Network tab
- Try adding a note
- Look for failed requests (red) to Firestore
- Click on failed request and check the error response

## What the Error Might Say:

**"Missing or insufficient permissions"**
→ Firestore rules need to be deployed

**"Authentication Required"**
→ You need to log in

**"Failed to save resource"**
→ Check the detailed error in browser console

## Manual Fix: Deploy Firestore Rules

```bash
cd /Users/mansa/Desktop/coder-pod
firebase deploy --only firestore:rules
```

This ensures your Firestore security rules are active in production.
