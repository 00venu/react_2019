import React from "react";
import classes from "./HighRisk.css";

const highRisk = (props) => {
  let arr = [classes.RiskParent, classes.HighRisk, classes.Animate];
  return (
    <div className={arr.join(" ")}>
      <div className={classes.RiskLeft}>
        <h3>HIGH RISK</h3>
        <p>
          You may require COVID-19 testing. Contact a physician as soon as
          possible.
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

export default highRisk;
