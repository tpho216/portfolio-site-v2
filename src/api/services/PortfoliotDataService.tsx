import { AxiosInstance } from 'axios';
import {IProjectResponse} from "../interfaces/IProject";

class PortfolioDataService {
    private readonly axios: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    public async getProjects() {
        return this.axios.get<IProjectResponse>('/project');
    }
}

export default PortfolioDataService;