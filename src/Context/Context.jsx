import React, { createContext, useState } from "react";
import run from "../Api.jsx";  // Adjust the import path as necessary

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    // Clear previous result and show loading
    setResultData("");
    setLoading(true);
    setShowResult(true);

    // Update the recent prompt and previous prompts before async call
    setRecentPrompts(input);
    setPrevPrompts((prev) => [...prev, input]);

    // Debugging logs
    console.log("Input before API call:", input);
    console.log("PrevPrompts before API call:", [...prevPrompts, input]);

    try {
      // Perform API call
      const response = await run(input);

      // Process the API response
      let responseArr = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArr.length; i++) {
        if (i === 0 || i % 2 === 0) {
          newResponse += responseArr[i];
        } else {
          newResponse += "<b>" + responseArr[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join("</br>");
      let newResponseArr = newResponse2.split(" ");

      for (let i = 0; i < newResponseArr.length; i++) {
        const nextWord = newResponseArr[i];
        delayPara(i, nextWord + " ");
      }

    } catch (error) {
      console.error("Error in API call:", error);
    } finally {
      setLoading(false);
      setInput("");  // Clear input after sending
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompts,
    recentPrompts,
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
};

export default ContextProvider;
