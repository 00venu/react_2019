import React from "react";
import Img from "../../assests/logo.png";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="wrap">
        <div className="logo" data-test="logo">
          <img src={Img} alt="logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
