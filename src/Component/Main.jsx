import React, { useContext } from "react";
import { Context } from "../Context/Context";
import "./Main.css"

const Main = () => {
  const {
    onSent,
    recentPrompts,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    prevPrompts
  } = useContext(Context);

  // Removed the standalone call to run() as it seems unnecessary

  return (
    <div className="ml-[100px] sm:ml-[130px] sm:w-[150vh] flex flex-col justify-between">
      <div>
        <h1 className="text-4xl mt-3 gradient-text mb-4">Ai Chatbot</h1>
      </div>
      <div className="result h-[85vh] overflow-y-auto no-scrollbar pr-4">
        <div className="result-title">
          <p className="recent-prompt text-3xl font-normal mb-4">{recentPrompts}</p>
          {loading ?
            <div className="loader flex flex-col gap-4">
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            
          }
        </div>
      </div>
      <div className="flex justify-center mb-4 nt-4 sm:gap-4">
        <input
          type="text"
          placeholder="Enter prompt"
          className="w-[80%] p-2 pl-4 pr-4 sm:w-[60%] border-black hover:border-white rounded-md"
          onChange={(e)=>setInput(e.target.value)}
          value={input}
        />
        <button className="text-black rounded-md btn" onClick={()=>onSent()}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Main;
