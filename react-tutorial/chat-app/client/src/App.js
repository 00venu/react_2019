import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </div>
  );
};

export default App;
