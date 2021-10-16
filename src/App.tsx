import React, {useEffect, useReducer} from "react";
import {About} from "./components/about/About"
import {routes} from "./components/routes/routes";
import {NavSideBar} from "./components/navSidebar/NavSideBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createDispatchHook, useDispatch, useSelector} from "react-redux";
import rootReducer, {RootState} from "./state/reducers/rootReducer";
import {createComment} from "./state/actions/commentActions";
import {initAbout} from "./state/actions/aboutAction";
import {ProjectsPage} from "./components/projects/ProjectsPage";
import PortfolioDataContext, {PortfolioDataProvider} from "./components/Providers/PortfolioDataProvider";
import {SkillsSection} from "./components/skills/Skills";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {IProject} from "./api/interfaces/IProject";
import skillsReducer, {initialSkillState} from "./state/reducers/skillsReducer";



const App = () => {
    const comment = useSelector((state : RootState) => {return state.comment});
    const [state, dispatch]= useReducer(skillsReducer, initialSkillState);


    useEffect(() => {
        fetchMockData().then(data => {
            dispatch({
                type: "FETCH_SKILLS_DATA", payload: {data:data}})
        })
    },[])


    const fetchMockData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(42);
            }, 2000);
            return "hello"
        });
    }

    return (
        <div>
            <About></About>
            <PortfolioDataProvider>
                <ProjectsPage/>
            </PortfolioDataProvider>
            <SkillsSection>

            </SkillsSection>
            {/*<BrowserRouter>*/}
            {/*    <Switch>*/}
            {/*        <Route*/}
            {/*            exact*/}
            {/*            path='/about'*/}
            {/*            component={About}>*/}
            {/*        </Route>*/}
            {/*    </Switch>*/}
            {/*</BrowserRouter>*/}
            <NavSideBar>
            </NavSideBar>

            {/*<button onClick={() => {*/}
            {/*    dispatch(createComment("Hello"));*/}
            {/*}}>Comment</button>*/}

        </div>


    );

}
export default App;
