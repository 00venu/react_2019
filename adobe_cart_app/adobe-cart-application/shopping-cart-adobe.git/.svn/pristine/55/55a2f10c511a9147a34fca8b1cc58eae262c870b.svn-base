import React from "react";
import "./SortBy.scss";

const sortBy = (props) => {
  let sort = ["Price -- High Low", "Price -- Low High", "Discount"];

  let items = sort.map((item, index) => {
    let activeArr = [];

    activeArr[props.index] = "active";

    return (
      <li
        key={item}
        className={activeArr[index]}
        onClick={() => props.sortPrice(index)}
      >
        {item}
      </li>
    );
  });
  return (
    <div className="SortByContainer">
      <h3>Sort By</h3>
      <ul>{items}</ul>
    </div>
  );
};

export default sortBy;
