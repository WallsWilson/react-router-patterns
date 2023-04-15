import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Colors from "./Colors";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Colors/>
      </BrowserRouter>
    </div>
  );
}

export default App;
