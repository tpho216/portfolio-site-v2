import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// @ts-ignore
import {registerFirebaseServiceWorker} from './firebase/registerFirebaseServiceWorker.tsx';
require('./index.css');

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)
registerFirebaseServiceWorker();

