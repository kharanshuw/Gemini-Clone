import { createContext, useEffect, useState } from "react";
import run from "../config/gemini";



const defaultValue = {
    prevHistory: [],
    setPrevHistory: () => { },
    onSent: () => { },
    setRecentPromt: () => { },
    recentPromt: "",
    showResult: false,
    loading: false,
    resultData: "",
    input: "",
    setInput: () => { },
};

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("pratik");
    const [recentPromt, setRecentPromt] = useState("");
    const [prevHistory, setPrevHistory] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoding] = useState(false);
    const [resultData, setResultData] = useState("");


    const onSent = async () => {
        console.log("onsent function is in execution ");

        setResultData("");

        setLoding(true);

        setShowResult(true);

        setRecentPromt(input);


        const response = await run(input);

        setLoding(false);
        setResultData(response);
        setInput("");
    }




    const contextValue = {
        // Define your context values here
        prevHistory,
        setPrevHistory,
        onSent,
        setRecentPromt,
        recentPromt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };





    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}



export default ContextProvider;