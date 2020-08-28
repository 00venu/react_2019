import React, { Component } from "react";
import * as actionsObj from "../../actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.incrementToCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.decrementToCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.addToCounter} />
        <br />
        <button onClick={() => this.props.getResult(this.props.ctr)}>
          Result
        </button>
        <ul>
          {this.props.storeResult.map(res => {
            return (
              <li
                key={Math.random()}
                onClick={() => this.props.deleteList(res)}
              >
                {res}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storeResult: state.reslt.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementToCounter: () => dispatch({ type: actionsObj.INCREMENT }),
    decrementToCounter: () => dispatch({ type: actionsObj.DECREMENT }),
    addToCounter: () => dispatch(actionsObj.add(5)),
    getResult: val => dispatch({ type: actionsObj.RESULT, CounterVal: val }),
    deleteList: value => dispatch({ type: actionsObj.DELETE, val: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
