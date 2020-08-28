import React from "react";
import logoImg from "../../assets/images/logo.png";

const logo = props => {
  return (
    <React.Fragment>
      <img src={logoImg} style={{ height: "100%" }} alt="Logo" />
    </React.Fragment>
  );
};

export default logo;
