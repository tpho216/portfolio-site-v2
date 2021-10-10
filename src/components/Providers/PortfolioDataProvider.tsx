// @ts-ignore
import React, {useContext, useEffect, useMemo, useState} from "react";
import APIClient from "../../api/APIClient";
import {IPortfolio} from "../../api/interfaces/IPortfolio";
import {DebugHelper} from "../../../Util/DebugHelper";
import {IProject} from "../../api/interfaces/IProject";
import _ from "lodash";
interface IPortfolioDataContext {
    fetching: boolean;
    error: any;
    portfolio: IPortfolio | null;
    apiClient: APIClient;
}

const PortfolioDataContext = React.createContext<IPortfolioDataContext>({
    fetching: false,
    error: null,
    portfolio : null,
    apiClient: new APIClient(),
})

interface IPortfolioDataProviderProps {
}


export const PortfolioDataProvider: React.FC<IPortfolioDataProviderProps> = (props) => {
    const { children } = props;
    const apiClient : APIClient = new APIClient();

    const [portfolio, setPortfolio] = useState<IPortfolioDataContext['portfolio'] | null>(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                setFetching(true);
                setError(null);
                const projectsResponse = await apiClient.portfolioDataService.getProjects();
                setPortfolio({
                    projects: projectsResponse.data
                })
            }
            catch (e) {
                setError(e);
                DebugHelper(e);
            }
        })();
    }, []);

    const context = {
        portfolio,
        fetching,
        error,
        apiClient
    }

    return <PortfolioDataContext.Provider value={context}> {children} </PortfolioDataContext.Provider>
}

export default PortfolioDataContext;