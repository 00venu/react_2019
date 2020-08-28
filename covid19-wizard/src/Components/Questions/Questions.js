import React, { Component } from "react";
import Question from "./Question/Question";
import Result from "../Results/Result";

class Questions extends Component {
  state = {};
  render() {
    let obj = this.props.initialQuestion;
    this.props.setVal.map((a) => {
      obj = obj[a];
      return obj;
    });

    return (
      <div
        style={{
          maxWidth: "780px",
          margin: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {obj === undefined ? (
          <Result />
        ) : (
          <Question
            initialQuestion={obj}
            click={this.props.buttonClick}
            btnIndex1={this.props.btnIndex}
            dis1={this.props.dis}
            confirm={this.props.confirm}
            addClass={this.props.addClass}
            buttonIndex={this.props.buttonIndex}
          />
        )}
      </div>
    );
  }
}

export default Questions;
