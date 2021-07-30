"use strict";

//@ts-ignore
firebase.initializeApp(config);
let about_greeting = document.getElementsByClassName("about-text-box");
let about_pic = document.getElementsByClassName("about-img");
let update_date = document.getElementsByClassName("update-date");
// @ts-ignore
const dbRef = firebase.database().ref();
const aboutRef = dbRef.child('about');
aboutRef.on("value", (snapshot) => {
    let profile_img = about_pic[0].getElementsByTagName("img");
    let greeting_msg = about_greeting[0].getElementsByTagName("h2");
    let about_info = about_greeting[0].getElementsByTagName("p");
    let date = update_date[0].getElementsByTagName("p");
    const about = snapshot.val();
    if (profile_img.length === 0 && greeting_msg.length === 0
        && about_info.length === 0 && date.length === 0) {
        let profile_img = document.createElement("img");
        profile_img.src = about.profile_img;
        about_pic[0].appendChild(profile_img);
        let greeting_msg = document.createElement("h2");
        greeting_msg.textContent = about.greeting_msg;
        about_greeting[0].appendChild(greeting_msg);
        let about_info = document.createElement("p");
        about_info.textContent = about.info;
        about_greeting[0].appendChild(about_info);
        let date = document.createElement("p");
        date.textContent = "updated on " + about.update_date;
        update_date[0].appendChild(date);
    }
    else {
        profile_img[0].src = about.profile_img;
        greeting_msg[0].textContent = about.greeting_msg;
        about_info[0].textContent = about.info;
        date[0].textContent = "updated on " + about.update_date;
    }
});
//@ts-ignore
const messaging = firebase.messaging();
if ("serviceWorker" in navigator) {
    console.log("serviceWorker in navigator");
    navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
        messaging.getToken({ vapidKey: "BLyw63sJLK0Vv29V4TtK3T9-nRfawmyA8ymWhT71PUZ-fynfLLKey6uTmrUOmY9SvGOOI7ZnKU7tbwI350r0Oaw", serviceWorkerRegistration: registration })
            .then((currentToken) => {
            if (currentToken) {
                console.log('current token for client: hidden');
            }
            else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // catch error while creating client token
        });
    })
        .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
    });
}
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    navigator.serviceWorker.getRegistration().then((registration) => {
        registration.showNotification('Hello world');
    });
});
