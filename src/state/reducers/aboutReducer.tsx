import firebase from "firebase";
import {Payload} from "../../helpers/types";

export interface aboutState {
    greetingMsg : string,
    info: string,
    updateDate: string,
    loading: boolean,
}

const initialState: aboutState = {
    greetingMsg : "loading...",
    info: "loading...",
    updateDate: "loading...",
    loading: true,
}

/**
 * About reducer
 * Handles state for getting about information
 */

export default function aboutReducer (state: aboutState = initialState,
                                      {type, payload = {}}: Payload) {
    switch (type) {
        case "INIT_ABOUT":
            return {
                ...state,
                aboutState : initialState
            }
        default:
            return state;
    }
}