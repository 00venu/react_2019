import React from "react";
import classes from "./MediumRisk.css";

const lowRisk = (props) => {
  let arr = [classes.RiskParent, classes.MediumRisk, classes.Animate];
  return (
    <div className={arr.join(" ")}>
      <div className={classes.RiskLeft}>
        <h3>MEDIUM RISK</h3>
        <p>
          Monitor your symptoms over next 48 hours. If those are either
          worsening or remaining static, please contact your physician.
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
