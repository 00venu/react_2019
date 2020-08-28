import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { counterIncrement, setFive } from "./store/actions";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {this.props.count}
        <br />
        <button onClick={this.props.countIncrement}>Count</button>
        <button onClick={() => this.props.setFive(5)}>Set 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countIncrement: () => {
      dispatch(counterIncrement());
    },
    setFive: (val) => dispatch(setFive(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
