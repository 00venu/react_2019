import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import FlightSearch from "./containers/FlightSearch";
import FlightResults from "./containers/FlightResult";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/" exact component={FlightSearch} />
        <Route path="/FlightResult" component={FlightResults} />
      </Switch>
    </main>
  );
}

export default App;
