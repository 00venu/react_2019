import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Counter from "../src/components/counter";

class App extends Component {
  state = {
    count: [
      { id: "1", value: 4 },
      { id: "2", value: 3 },
      { id: "3", value: 2 },
      { id: "4", value: 1 }
    ],
    tags: ["tag-1", "tag-2", "tag-3"]
  };

  deleteHandler = id => {
    const filter1 = this.state.count.filter(f => {
      return f.id !== id;
    });
    this.setState({ count: filter1 });
  };

  resetHandler = () => {
    const count = this.state.count.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ count: count });
  };

  clickHandler = id => {
    // console.log(id);
    const index = this.state.count.findIndex(i => {
      return i.id === id;
    });

    const count = [...this.state.count];

    const getObject = { ...this.state.count[index] };

    getObject.value = this.state.count[index].value + 1;

    count[index] = getObject;

    this.setState({ count: count });
  };
  sumHandler = () => {
    let initialValue = 0;
    let sum = [...this.state.count].reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      initialValue
    );

    return (sum = sum === 0 ? "zero" : sum);
  };

  render() {
    let classChange = "badge m-2 badge-";
    classChange += this.sumHandler() === "zero" ? "warning" : "primary";

    return (
      <div>
        <span className={classChange}> {this.sumHandler()}</span>
        <button className="btn btn-primary m-2" onClick={this.resetHandler}>
          Reset
        </button>
        {this.state.count.map(c => {
          return (
            <Counter
              key={c.id}
              value={c.value}
              id={c.id}
              click={this.deleteHandler}
              incrementHandler={this.clickHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
