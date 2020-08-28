import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedId: null
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data.splice(0, 4);
      const updatedPost = posts.map(p => {
        return {
          ...p,
          author: "Max"
        };
      });
      this.setState({ posts: updatedPost });
    });
  }

  selectedDataHandler = id => {
    this.setState({ selectedId: id });
  };

  render() {
    const getList = this.state.posts.map(c => {
      return (
        <Post
          key={c.id}
          title={c.title}
          auth={c.author}
          click={() => this.selectedDataHandler(c.id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{getList}</section>
        <section>
          <FullPost selId={this.state.selectedId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
