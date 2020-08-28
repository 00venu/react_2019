import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Post.css";
import Details from "./Details";
class Cone extends Component {
  state = {
    posts: [],
    storeId: null
  };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data.slice(0, 4);
      this.setState({ posts: posts });
    });
  }

  getIdHandler = id => {
    //this.setState({ storeId: id });
    this.props.history.push("/" + id);
  };

  render() {
    let posts = this.state.posts.map(post => {
      return (
        // <Link key={post.id} to={"/" + post.id}>
        <li key={post.id} onClick={() => this.getIdHandler(post.id)}>
          {post.title}
        </li>
        //</Link>
      );
    });

    return (
      <div>
        <ul className={classes.Posts}>{posts}</ul>
      </div>
    );
  }
}

export default Cone;
