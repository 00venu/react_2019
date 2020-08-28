import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  countHandler() {
    return this.props.value === 0 ? "Zero" : this.props.value;
  }

  render() {
    let classChange = "badge m-2 badge-";
    classChange += this.props.value === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={classChange}> {this.countHandler()}</span>
        <button
          onClick={() => this.props.incrementHandler(this.props.id)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.click(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
