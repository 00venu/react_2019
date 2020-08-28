import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  state = {
    storeObject: null
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.storeObject ||
        (this.state.storeObject &&
          this.state.storeObject.id !== this.props.match.params.id)
      )
        axios
          .get(
            "http://jsonplaceholder.typicode.com/posts/" +
              this.props.match.params.id
          )
          .then(response => {
            this.setState({ storeObject: response.data });
          });
    }
  }

  render() {
    let body = <div>Please select Head</div>;
    if (this.props.match.params.id) {
      body = <div>Loading...</div>;
    }
    if (this.state.storeObject) {
      body = <div>{this.state.storeObject.body}</div>;
    }

    return <div>{body}</div>;
  }
}

export default Details;
