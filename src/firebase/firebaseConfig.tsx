// irebaseConfig.js
// Contains the config details of firebase, this should NOT be committed to your repo
// if the repo is public
// You could optionally use .env file to store these data
export const firebaseConfig = {
    apiKey: process.env.Firebase_API_KEY,
    authDomain: process.env.Firebase_AUTH_DOMAIN,
    databaseURL: process.env.Firebase_DATABASE_URL,
    projectId: process.env.Firebase_PROJECT_ID,
    storageBucket: process.env.Firebase_STORAGE_BUCKET,
    messagingSenderId: process.env.Firebase_MESSAGING_SENDER_ID,
    appId: process.env.Firebase_APP_ID,
    measurementId: process.env.Firebase_MEASUREMENT_ID
};