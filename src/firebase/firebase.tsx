/*Initialize Firebase Instance*/
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';
import {DebugHelper} from "../../Util/DebugHelper";

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

if (!firebase.apps.length) { // check if there is any app in projects (web apps)
    const result = firebase.initializeApp(firebaseConfig);
    if (result == null) {
        DebugHelper("Firebase fail to initialize");
    } else {
        DebugHelper("Firebase App Instance Successfully initialized");
    }
}
const db = firebase.database();
DebugHelper("Initialized Realtime Database.")

const messaging = firebase.messaging();
DebugHelper("Initialized Cloud Messaging.")



export {
    db,
    messaging
};