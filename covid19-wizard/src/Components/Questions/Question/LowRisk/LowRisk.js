import React from "react";
import classes from "./LowRisk.css";

const lowRisk = (props) => {
  let arr = [classes.RiskParent, classes.LowRisk, classes.Animate];
  return (
    <div className={arr.join(" ")}>
      <div className={classes.RiskLeft}>
        <h3>LOW RISK</h3>
        <p>
          Please follow the precautions and guidelines laid down by the
          government and medical bodies. Take good care of your health.
        </p>
      </div>
      <div className={classes.RiskRight}>
        <div className={classes.IndicatorParent}>
          <div className={classes.IndicatorContainer}>
            <div className={classes.NibIndicator}></div>
            <div className={classes.LineIndicator}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default lowRisk;
