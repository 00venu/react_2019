import React from "react";
import classes from "./Answer.css";

const answer = (props) => {
  let test = (
    <button className={classes.Active}>{props.answer[props.index]}</button>
  );
  let arr = props.answer[props.index];
  if (Array.isArray(props.answer[props.index])) {
    if (props.answer[props.index].length > 1) {
      var value = "None";
      arr = arr.filter(function (item) {
        return item !== value;
      });
    }
    test = arr.map((a) => {
      return (
        <button key={a} className={classes.Active}>
          {a}
        </button>
      );
    });
  }
  return (
    <React.Fragment>
      <div className={classes.QuestionContainer}>
        <div className={classes.Question}>
          {props.val}
          <span className={classes.Qicon}></span>
        </div>
      </div>
      <div className={classes.Options}>{test}</div>
    </React.Fragment>
  );
};
export default answer;
