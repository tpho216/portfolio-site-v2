import React from "react";
import {useDispatch} from "react-redux";

interface IFirebaseContext {

}

const FirebaseContext = React.createContext<IFirebaseContext>({

})
const dispatch = useDispatch();
interface IFirebaseProviderProps {}
export const FirebaseProvider : React.FC <IFirebaseProviderProps> = (props) => {
    const {children} = props;

    const context: IFirebaseContext  =  {

    }
    return <FirebaseContext.Provider value={context}> {children}</FirebaseContext.Provider>

}
