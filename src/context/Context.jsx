import { createContext, useEffect, useState } from "react";
import run from "../config/gemini";



export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPromt, setRecentPromt] = useState("");
    const [prevHistory, setPrevHistory] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoding] = useState(false);
    const [resultData, setResultData] = useState("");


    const dalayPara = (index, nextWord) => {

        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);

    }


    const newChat = () => {
        setLoding(false);
        setShowResult(false);
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


    const onSent = async (prompt) => {
        console.log("onsent function is in execution ");

        setResultData("");

        setLoding(true);

        setShowResult(true);

        let result = "";

        if (prompt !== undefined) {
            result = await run(prompt);
            setRecentPromt(prompt);
        }
        else {

            setPrevHistory(prevHistory => [...prevHistory, input]);
            setRecentPromt(input);
            result = await run(input);
        }

        setLoding(false);

        let newResponse = formatText(result);

        let newResponseArray = newResponse.split(" ");

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];

            dalayPara(i, nextWord + " ");
        }

        //setResultData();
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
        newChat
    };





    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}



export default ContextProvider;