import React, { Component } from "react";
import classes from "./Question.css";

class Question extends Component {
  state = {};
  render() {
    console.log(this.props.initialQuestion);
    let buttons = (
      <div className={classes.Options}>
        {this.props.initialQuestion["question"].options.map((value, ind) => {
          let active1 = [];
          active1[this.props.btnIndex1] = classes.Active;

          return (
            <button
              className={active1[ind]}
              key={value}
              onClick={() => this.props.click(value, ind)}
              disabled={this.props.dis1}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
    return (
      <div className={classes.QuestionContainer}>
        <div className={classes.Question}>
          {this.props.initialQuestion["question"].title}
          <span className={classes.Qicon}></span>
        </div>
        {buttons}
      </div>
    );
  }
}

export default Question;
