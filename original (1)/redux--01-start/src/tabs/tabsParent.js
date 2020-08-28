import React, { Component } from "react";

import "./tabParent.css";
import TabContainer from "./TabContainerParent";

class Tabs extends Component {
  state = {
    container: "Tab-1",
    index: 0,
    tabs: ["Tab-1", "Tab-2", "Tab-3"]
  };

  tabHandler = (tab, index) => {
    this.setState({ container: tab, index: index });
  };

  render() {
    let tabclass = [];
    if (this.state.class) {
      tabclass.push("TabActive");
    }

    return (
      <div>
        <ul className="TabParent">
          {this.state.tabs.map((tab, index) => {
            let active = [];
            active[this.state.index] = "TabActive";

            return (
              <li
                className={active[index]}
                key={tab}
                onClick={() => this.tabHandler(tab, index)}
              >
                {tab}
              </li>
            );
          })}
        </ul>
        <TabContainer container={this.state.container} />
      </div>
    );
  }
}

export default Tabs;
