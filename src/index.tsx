import React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {About} from "./components/about/About";

require('./index.css');

ReactDOM.render(
    <About/>,
    document.getElementById("output")
)


