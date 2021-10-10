import PortfolioDataService from './services/PortfoliotDataService';
import axios from "axios";

class APIClient {
    public readonly portfolioDataService : PortfolioDataService;

    constructor() {
        const axiosInstance = axios.create({
            baseURL: "https://tphoportfolioapi.azurewebsites.net"
        });

        this.portfolioDataService = new PortfolioDataService(axiosInstance);
    }
}

export default APIClient;