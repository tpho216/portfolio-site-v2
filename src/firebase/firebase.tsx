/*Initialize Firebase Instance*/
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.Firebase_API_KEY,
    authDomain: process.env.Firebase_AUTH_DOMAIN,
    databaseURL: process.env.Firebase_DATABASE_URL,
    projectId: process.env.Firebase_PROJECT_ID,
    storageBucket: process.env.Firebase_STORAGE_BUCKET,
    messagingSenderId: process.env.Firebase_MESSAGING_SENDER_ID,
    appId: process.env.Firebase_APP_ID,
    measurementId: process.env.Firebase_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const initialize = () => {
    console.log("Running firebase.tsx ...");
    console.log("env", process.env.Firebase_API_KEY);
}

const db = firebase.database();
//const db = "something"
console.log("db", db.ref().child("about"));

export {
    db
};