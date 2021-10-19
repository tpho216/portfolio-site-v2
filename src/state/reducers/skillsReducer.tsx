import {Payload} from "../../helpers/types";

export interface skillsState {
   skills : []
}

const initialSkillState = {
    skills : [
        {
            name: "Loading...",
            description: "Loading",
            languages: ["loading..."]
        },
    ]
}

/**
 * Skills Reducer
 * Handle state for getting skills information
 */

export default function skillsReducer (
                    state = initialSkillState,
                   action : Payload)
{
    switch (action.type) {
        case "INIT_SKILLS":
            return {
                ...state,
                skills : initialSkillState
            };
        case "FETCH_SKILLS_DATA":
            return {
                ...state,
                skills: action.payload
            };
        default:
            return state;

    }
}