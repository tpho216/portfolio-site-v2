import { AxiosInstance } from 'axios';
import {IProject} from "../interfaces/IProject";
import {IArrayResponse} from "../interfaces/IArrayResponse";

class PortfolioDataService {
    private readonly axios: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    public async getProjects() {
        return this.axios.get<IProject[]>('/project');
    }
}

export default PortfolioDataService;