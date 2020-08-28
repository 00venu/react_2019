import React, { Component } from "react";

import Counter from "./containers/Counter/Counter";
import "./App.css";
//import Tabs from "./tabs/tabsParent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
      /* <div>
        <Tabs />
      </div>*/
    );
  }
}

export default App;
