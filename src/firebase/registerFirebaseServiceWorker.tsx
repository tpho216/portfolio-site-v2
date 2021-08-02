import {DebugHelper} from "../../Util/DebugHelper";
import {messaging} from "../firebase/firebase";

export const registerFirebaseServiceWorker = async () => {
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