// @ts-ignore
import React, {useContext, useEffect, useMemo, useState} from "react";
import APIClient from "../../api/APIClient";
import {IPortfolio} from "../../api/interfaces/IPortfolio";
import {DebugHelper} from "../../../Util/DebugHelper";
interface IPortfolioDataContext {
    fetching: boolean;
    error: any;
    portfolioData: IPortfolio | null;
    apiClient: APIClient;
}

const PortfolioDataContext = React.createContext<IPortfolioDataContext>({
    fetching: false,
    error: null,
    portfolioData : null,
    apiClient: new APIClient(),
})

interface IPortfolioDataProviderProps {
}


export const PortfolioDataProvider: React.FC<IPortfolioDataProviderProps> = (props) => {
    const { children } = props;
    const apiClient : APIClient = new APIClient();

    const [portfolioData, setPortfolioData] = useState<IPortfolioDataContext | null>(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                setFetching(true);
                setError(null);
                const projectsDataResponse = await apiClient.portfolioDataService.getProjects();
                //const portfolioData =
                const projectsData = projectsDataResponse.data;
                console.log(projectsData);
                //setPortfolioData(projectsData);

            }
            catch (e) {
                setError(e);
                DebugHelper(e);
            }
        })();
    }, []);

    const context = {
        portfolioData,
        fetching,
        error,
        apiClient
    }

    return <PortfolioDataContext.Provider value={context}> {children} </PortfolioDataContext.Provider>
}

export default PortfolioDataContext;