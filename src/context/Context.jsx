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

    const [input, setInput] = useState("");
    const [recentPromt, setRecentPromt] = useState("");
    const [prevHistory, setPrevHistory] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoding] = useState(false);
    const [resultData, setResultData] = useState("");


    const dalayPara = (index, nextWord) => {

    }


    let formatText = (text) => {
        // Replace ** with <b> tags
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        // Replace * with <br> tags
        formattedText = formattedText.replace(/\*/g, '<br>');

        // Replace `\`\`\`... \`\`\`` with <pre><code>...</code></pre>
        formattedText = formattedText.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

        return formattedText;

    }


    const onSent = async () => {
        console.log("onsent function is in execution ");

        setResultData("");

        setLoding(true);

        setShowResult(true);

        setRecentPromt(input);


        const response = await run(input);

        // let responseArray = response.split("**");

        // let newResponse = "";

        // for (let i = 0; i < responseArray.length; i++) {
        //     if (i === 0 || i % 2 !== 1) {
        //         newResponse += responseArray[i];
        //     } else {
        //         newResponse += "<b>" + responseArray[i] + "</b>" + "</br>";
        //     }
        // }

        // let newResponse2 = newResponse.split("*").join("</br>");
        setLoding(false);
        setResultData(formatText(response));
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