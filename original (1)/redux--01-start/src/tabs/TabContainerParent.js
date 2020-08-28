import React, { Component } from "react";

import TabOne from "../tabs/Tab/Tab-1";

class TabContainer extends Component {
  state = {};
  render() {
    let tabContainer = null;

    switch (this.props.container) {
      case "Tab-1":
        tabContainer = <TabOne />;
        break;
      case "Tab-2":
        tabContainer = <h1>Tab-2 Container</h1>;
        break;
      case "Tab-3":
        tabContainer = <h1>Tab-3 Container</h1>;
        break;
      default:
        tabContainer = <h1>Tab-1 Container</h1>;
    }
    return tabContainer;
  }
}

export default TabContainer;
