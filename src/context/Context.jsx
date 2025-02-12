import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const onSent = async (prompt) =>{
      await  run(prompt);
    }

    onSent("what is react js");

    const contextValue = {
        // Define your context values here
    };

    return (    
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}


export default ContextProvider;