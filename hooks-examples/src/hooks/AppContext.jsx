// Creating Contex

import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=> {
    const phone= "8384838283";
    const email= "yaswanth@gmail.com";
    const [count, setCount] = useState(0);

    return(
        <AppContext.Provider value={{phone, email, count, setCount}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;