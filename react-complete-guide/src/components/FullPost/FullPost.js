import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadPost: null
  };
  componentDidUpdate() {
    if (this.props.selId) {
      if (
        !this.state.loadPost ||
        (this.state.loadPost && this.state.loadPost.id !== this.props.selId)
      ) {
        axios
          .get("http://jsonplaceholder.typicode.com/posts/" + this.props.selId)
          .then(response => {
            this.setState({ loadPost: response.data });
          });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.selId) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadPost) {
      console.log(this.state.loadPost.title);
      post = (
        <div className="FullPost">
          <h1>{this.state.loadPost.title}</h1>
          <p>{this.state.loadPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
