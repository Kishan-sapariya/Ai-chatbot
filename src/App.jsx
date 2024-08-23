import React from "react";
import Sidebar from "./Component/Sidebar";
import Main from "./Component/Main";
import ContextProvider from "./Context/Context";

const App = () => {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <ContextProvider>
        <Main />
      </ContextProvider>
    </div>
  );
};

export default App;
