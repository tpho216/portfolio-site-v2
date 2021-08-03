import {combineReducers} from "@reduxjs/toolkit";
import aboutReducer from "./aboutReducer";

export interface RootState {

}
const rootReducer = combineReducers<RootState>({
    about: aboutReducer,
})

export default rootReducer;