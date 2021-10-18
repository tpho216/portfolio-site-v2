import { AxiosInstance } from 'axios';
import {IProject} from "../interfaces/IProject";
import {ISkill} from "../interfaces/ISkill";

class PortfolioDataService {
    private readonly axios: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    public async getProjects() {
        return this.axios.get<IProject[]>('/project');
    }

    public async getSkills() {
        return this.axios.get<ISkill[]>('/skill');
    }
}

export default PortfolioDataService;