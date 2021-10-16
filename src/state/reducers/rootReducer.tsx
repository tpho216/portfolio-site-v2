import {combineReducers} from "@reduxjs/toolkit";
import aboutReducer, {aboutState} from "./aboutReducer";
import commentReducer, {commentState} from "./commentReducer";
import skillsReducer, {skillsState} from "./skillsReducer";

export interface RootState {
    about: aboutState,
    comment: commentState
    skills: skillsState
}
const rootReducer = combineReducers<RootState>({
    about: aboutReducer,
    comment: commentReducer,
    skills: skillsReducer
})

export default rootReducer;