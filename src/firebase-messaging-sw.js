importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js');
//Very bad bug happens when you do not match firebase version with npm package 🥲

const config = {
    // apiKey: process.env.Firebase_API_KEY,
    // authDomain: process.env.Firebase_AUTH_DOMAIN,
    // databaseURL: process.env.Firebase_DATABASE_URL,
    // projectId: process.env.Firebase_PROJECT_ID,
    // storageBucket: process.env.Firebase_STORAGE_BUCKET,
    // messagingSenderId: process.env.Firebase_MESSAGING_SENDER_ID,
    // appId: process.env.Firebase_APP_ID,
    // measurementId: process.env.Firebase_MEASUREMENT_ID,

    apiKey: "AIzaSyBVZc5EGhjFQ1aghwxhg9j-WDuFYH8rpFM",
    authDomain: "portfolio-site-v2.firebaseapp.com",
    databaseURL: "https://portfolio-site-v2-default-rtdb.firebaseio.com",
    projectId: "portfolio-site-v2",
    storageBucket: "portfolio-site-v2.appspot.com",
    messagingSenderId: "706740809585",
    appId: "1:706740809585:web:e0afb2450d16ba1f6350d0",
    measurementId: "G-48RJJKDPBS"
};

firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
if (firebase.messaging.isSupported()) {
    console.log("Firebase messaging is supported");
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log('Received background message ', payload);
    });

}