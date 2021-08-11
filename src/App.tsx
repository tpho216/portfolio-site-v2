import React from "react";
import {About} from "./components/about/About"
import {routes} from "./components/routes/routes";
import {NavSideBar} from "./components/navSidebar/NavSideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./state/reducers/rootReducer";
import {createComment} from "./state/actions/commentActions";

const App = () => {

    const comment = useSelector((state : RootState) => {return state.comment});

    const dispatch = useDispatch();
    return (
        <div>
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
            <NavSideBar>

            </NavSideBar>

            <button onClick={() => {
                dispatch(createComment("Hello"));
            }}>Comment</button>

        </div>


    );
}
export default App;