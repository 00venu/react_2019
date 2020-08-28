import React, { Component } from "react";
import InputRange from "react-input-range";
import "./Filter.scss";

import "react-input-range/lib/css/index.css";

class Filter extends Component {
  state = {
    value: { min: this.props.value.min, max: this.props.value.max },
  };

  render() {
    return (
      <React.Fragment>
        <h3>Filters</h3>
        <div className="slider-parent">
          <InputRange
            maxValue={85696}
            minValue={8160}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
          />
          <span className="price">Price</span>
        </div>
        <div className="BtnParent">
          <button
            className="BtnApply"
            onClick={() => this.props.filterPrice(this.state.value)}
          >
            Apply
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
