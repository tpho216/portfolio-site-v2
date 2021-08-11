import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
// @ts-ignore
import {registerFirebaseServiceWorker} from './firebase/registerFirebaseServiceWorker.tsx';
import rootReducer from "./state/reducers/rootReducer";
import {createStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
require('./index.css');

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
)
registerFirebaseServiceWorker();

