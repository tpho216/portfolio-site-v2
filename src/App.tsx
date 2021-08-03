import React from "react";
import {About} from "./components/about/About"
import {routes} from "./components/routes/routes";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/about'
                    component={About} //TODO Replace with routes array
                >
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;