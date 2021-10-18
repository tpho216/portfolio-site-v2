import {IProject} from "./IProject";
import {ISkill} from "./ISkill";

export interface IPortfolio {
    projects : Array<IProject> | null
    skills : Array<ISkill> | null
}