import firebase from "firebase";
import {Payload} from "../../helpers/types";

export interface commentState {

}

const initialState: commentState = {

}

/**
 * About reducer
 * Handles state for getting about information
 */

const commentReducer = (state: commentState = initialState, {type, payload = {}}: Payload) => {
    switch (type) {
        case "CREATE_COMMENT":
            return payload;
        default:
            return state;
    }
}

export default commentReducer;