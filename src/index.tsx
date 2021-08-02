import React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {About} from "./components/about/About";

import {DebugHelper} from "../Util/DebugHelper";
import firebase from "firebase/app";

require('./index.css');

ReactDOM.render(
    <About/>,
    document.getElementById("output")
)

let messaging = null;


const registerFirebaseServiceWorker = async () => {
    messaging = firebase.messaging();
    //Avoid registering token multiple times
    let currentToken = await messaging.getToken();
    DebugHelper('current token for messaging client: hidden');
    if (currentToken === null) {
        const swRegistration = await navigator.serviceWorker.register("../firebase-messaging-sw.js");
        DebugHelper("Registration successful, scope is:" + swRegistration.scope);
        currentToken = await messaging.getToken({vapidKey: process.env.REACT_APP_webPushCertificatePublicVapidKey, serviceWorkerRegistration : swRegistration });
        if (currentToken) {
            DebugHelper('current token for client: hidden');
        }
        else {
            DebugHelper('current token for client: ' + currentToken); //should be null
        }
    }
}

registerFirebaseServiceWorker();

