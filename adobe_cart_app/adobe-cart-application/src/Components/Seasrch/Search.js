import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

const search = (props) => {
  return <FontAwesomeIcon className="SearchStyle" icon={faSearch} />;
};

export default search;
