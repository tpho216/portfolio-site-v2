import firebase from "firebase";
import {Payload} from "../../helpers/types";

export interface aboutState {

}

const initialState: aboutState = {

}

/**
 * About reducer
 * Handles state for getting about information
 */

export default function aboutReducer (state: aboutState = initialState, {type, payload = {}}: Payload) {
    return state
}