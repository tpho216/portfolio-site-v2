// @ts-ignore
import React, {useContext, useEffect, useMemo, useState} from "react";
import APIClient from "../../api/APIClient";

interface IPortfolioDataContext {
    fetching: boolean;
    error: any;

}


const PortfolioDataContext = React.createContext<IPortfolioDataContext>({
    portfolioData : null,
    fetching: false,
    error: null
})

interface IPortfolioDataProviderProps {

}


export const PortfolioDataProvider: React.FC<IPortfolioDataProviderProps> = (props) => {
    const { children } = props;
    const apiClient : APIClient = new APIClient();

    const [portfolioData, setPortfolioData] = useState<IPortfolioDataContext>();
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setFetching(true);
                setError(null);
                const portfolioData = await apiClient.portfolioDataService.getProjects();

            }
            catch (e) {
                setError(null);
            }
        })();
    }, []);

    const context = {
        portfolioData,
        fetching,
        error,
    }

    return <PortfolioDataContext.Provider value={context}> {children} </PortfolioDataContext.Provider>
}