import React, { Component } from "react";
import Question from "./Question/Question";

class Questions extends Component {
  state = {};
  render() {
    let question = this.props.qLoop.map((a, b) => {
      return (
        <Question
          key={Math.random()}
          initialQuestion={a}
          click={this.props.buttonClick}
        />
      );
    });
    return (
      <div style={{ maxWidth: "450px", margin: "auto", paddingTop: "20px" }}>
        <Question
          initialQuestion={this.props.initialQuestion}
          click={this.props.buttonClick}
          btnIndex1={this.props.btnIndex}
          dis1={this.props.dis}
        />
        {question}
      </div>
    );
  }
}

export default Questions;
