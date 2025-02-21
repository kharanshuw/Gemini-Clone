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


    /**
     * dalayPara Function: This function introduces a delay before appending the nextWord to the resultData. 
     * The delay is determined by the index multiplied by 75 milliseconds.
     * @param {*} index 
     * @param {*} nextWord 
     */
    const dalayPara = (index, nextWord) => {

        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);

    }


    /**
     * newChat Function: This function resets the loading and result visibility states to start a new chat.
     */
    const newChat = () => {
        setLoding(false);
        setShowResult(false);
    }


    /**
     * formatText Function: This function formats the input text by replacing specific patterns with HTML tags to create bold text,
     * line breaks, and code blocks.
     * @param {*} text 
     * @returns 
     */
    let formatText = (text) => {
        // Replace ** with <b> tags
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

        // Replace * with <br> tags
        formattedText = formattedText.replace(/\*/g, '<br>');

        // Replace `\`\`\`... \`\`\`` with <pre><code>...</code></pre>
        formattedText = formattedText.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

        return formattedText;

    }


    /**
       onSent Function: This function handles sending a prompt or input to the run function and processing the result. It:

        Clears resultData and sets loading and result visibility states.

        Calls the run function with the prompt or input.

        Formats the result using formatText.

        Splits the formatted result into words and appends them to resultData with a delay using dalayPara.

        Resets the input state.
     *
     */
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

    /**
     * contextValue Object: This object contains all the state variables and functions 
     * that will be provided to child components via the context.
     */
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