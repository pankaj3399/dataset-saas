# Deployment Guide:

This guide covers deploying a Vite frontend and Express backend on Vercel with separate repositories.

## Frontend Deployment (Vite)

### 1. Environment Setup

Create `.env` in your Vite project:
Take reference from .env.example (for any updated env variables)

```
VITE_API_URL=https://your-backend-name.vercel.app/api
```

### 2. Deploy to Vercel

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your frontend repository and select the root directory to './client'
4. Configure settings:
   - Framework Preset: Vite
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
5. Add environment variables:
   - Name: `VITE_API_URL`
   - Value: Your backend URL (e.g., `https://your-backend-name.vercel.app/api`)
6. Click "Deploy"

## Backend Deployment (Express)

### 1. Prepare Your Express App for Vercel

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

### 2. CORS Configuration

In your Express app:

```javascript
// Add CORS support ( \client\src\services\api.js )
const cors = require('cors');

// Allow requests from your frontend domain
app.use(
  cors({
    origin: ["your-deployed-frontend-url", "http://localhost:5173"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```

### 3. Deploy to Vercel

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project" and import your repository and set root dir to './server'
4. Configure settings (mostly automatic with vercel.json)
5. Add environment variables if needed take reference from .env.example

```
# MongoDB Configuration
MONGO_URI= <your-db-url>

# Firebase Configuration
# In production, store the entire service account JSON as an environment variable
 FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"your-project-id",...}

# Client URL for CORS
CLIENT_URL= <your-frontend-url>

```
6. Click "Deploy"

## Connecting Frontend and Backend

After both deployments complete:
1. Confirm your backend URL is correctly set in your frontend's environment variables
2. Verify the CORS configuration in your backend includes your frontend's domain
3. Test API connections from frontend to backend

## Troubleshooting

If your app doesn't connect properly:
1. Check your environment variables in Vercel project settings
2. Verify the CORS origin matches your frontend domain exactly
3. Check Vercel logs for any deployment errors
<br>
<br>

# Additional Information

## Firebase Console Setup Guide

This guide explains how to obtain your Firebase service account credentials and enable Google authentication through the Firebase Console.

## Getting Firebase Service Account JSON

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project ( or create new )
3. Click the gear icon ⚙️ next to "Project Overview" to access **Project settings**
4. Navigate to the **Service accounts** tab
5. Scroll down to the "Firebase Admin SDK" section
6. Click the **Generate new private key** button
7. Confirm by clicking **Generate key** in the popup dialog
8. A JSON file will be downloaded to your computer
9. Open this JSON file in a text editor
10. Copy the entire JSON content to use as your `FIREBASE_SERVICE_ACCOUNT` environment variable

## Setting Up Google Authentication in Firebase

1. In the Firebase Console, select your project
2. Click on **Authentication** in the left sidebar
3. Click on the **Sign-in method** tab
4. Find **Google** in the list of providers and click on it
5. Toggle the **Enable** switch to turn it on
6. Add a **Project support email** (typically your email)
7. Click **Save**
