import React, { Component } from "react";
import classes from "./Question.css";
import HighRisk from "./HighRisk/HighRisk";
import MediumRisk from "./MediumRisk/MediumRisk";
import LowRisk from "./LowRisk/LowRisk";

class Question extends Component {
  state = {
    boxcalss: [],
    animate: false,
    spinner: true,
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.initialQuestion["question"].title !==
      this.props.initialQuestion["question"].title
    ) {
      this.setState({ boxcalss: [], spinner: true });
      setTimeout(() => {
        this.setState({ spinner: false, animate: true });
      }, 500);
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ spinner: false, animate: true });
    }, 500);
  }

  render() {
    let boxClass = this.state.boxcalss;
    let buttons = (
      <div className={classes.Options}>
        {this.props.initialQuestion["question"].options.map((value, ind) => {
          let length = this.props.initialQuestion["question"].options.length;

          //console.log(boxClass);
          if (this.props.addClass) {
            boxClass[this.props.buttonIndex] = classes.Active;
          }
          return (
            <button
              className={
                this.props.confirm === true && value === "None"
                  ? classes.Confirm
                  : boxClass[ind]
              }
              key={value}
              onClick={() =>
                this.props.click(
                  value,
                  this.props.initialQuestion["question"].title,
                  length,
                  ind,
                  this.props.initialQuestion["question"].id
                )
              }
            >
              {this.props.confirm === true && value === "None"
                ? "Confirm"
                : value}
            </button>
          );
        })}
      </div>
    );

    let animate = [classes.QuestionContainer, classes.Animate];
    if (this.state.animate) {
      animate.push(classes.Animate);
    }
    if (this.state.animate === false) {
      animate.splice(1, 1);
    }
    let question = (
      <div style={{ textAlign: "center" }}>
        <div className={classes.IdsFacebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
    if (this.state.spinner === false) {
      question = (
        <div className={animate.join(" ")}>
          <div className={classes.Question}>
            {this.props.initialQuestion["question"].title}
            <span className={classes.Qicon}></span>
          </div>
          {buttons}
        </div>
      );
    }

    if (
      this.props.initialQuestion["question"].title === "High Risk" &&
      this.state.spinner === false
    ) {
      question = <HighRisk />;
    }
    if (
      this.props.initialQuestion["question"].title === "Low Risk" &&
      this.state.spinner === false
    ) {
      question = <LowRisk />;
    }
    if (
      this.props.initialQuestion["question"].title === "Medium Risk" &&
      this.state.spinner === false
    ) {
      question = <MediumRisk />;
    }

    return <React.Fragment>{question}</React.Fragment>;
  }
}

export default Question;
