/*Initialize Firebase Instance*/
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/messaging';
import {firebaseConfig} from "./firebaseConfig";
import React, {createContext, useEffect} from "react";
import {DebugHelper} from "../../Util/DebugHelper";
import {useDispatch} from "react-redux";

//Initialization
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




