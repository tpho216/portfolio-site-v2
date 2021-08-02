import React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {About} from "./components/about/About";

// @ts-ignore
import {registerFirebaseServiceWorker} from './firebase/registerFirebaseServiceWorker.tsx';
require('./index.css');

ReactDOM.render(
    <About/>,
    document.getElementById("output")
)
registerFirebaseServiceWorker();

