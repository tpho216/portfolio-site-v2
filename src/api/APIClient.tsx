import PortfolioDataService from './services/PortfoliotDataService';
import axios from "axios";

class APIClient {
    public readonly portfolioDataService : PortfolioDataService;
    private readonly DEVELOPMENT_BASE_URL = "http://localhost"
    private readonly PRODUCTION_BASE_URL = "https://tphoportfolioapi.azurewebsites.net"
    constructor() {
        const axiosInstance = axios.create({
            baseURL: this.PRODUCTION_BASE_URL
        });

        this.portfolioDataService = new PortfolioDataService(axiosInstance);
    }
}

export default APIClient;