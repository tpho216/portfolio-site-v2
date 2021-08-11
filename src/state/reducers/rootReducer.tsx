import {combineReducers} from "@reduxjs/toolkit";
import aboutReducer, {aboutState} from "./aboutReducer";
import commentReducer, {commentState} from "./commentReducer";

export interface RootState {
    about: aboutState,
    comment: commentState
}
const rootReducer = combineReducers<RootState>({
    about: aboutReducer,
    comment: commentReducer
})

export default rootReducer;