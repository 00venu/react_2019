import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js, Constructor ");
  }

  state = {
    persons: [
      { id: "unique-1", name: "Rama Rao", age: "65" },
      { id: "unique-2", name: "Annapurana", age: "60" },
      { id: "unique-3", name: "Prapulla", age: "44" }
    ],
    showState: true
  };

  clickHandler = () => {
    this.setState({
      persons: [
        { name: "Rama Rao U", age: "66" },
        { name: "Annapurana U", age: "60" },
        { name: "Prapulla G", age: "44" }
      ]
    });
  };
  /*toggleHandler =()=>{
  const deosState = this.state.showState;

    this.setState({showState: !deosState})

}*/

  changeHandler = (event, index) => {
    const getIndex = index;

    const getObject = { ...this.state.persons[getIndex] };

    getObject.name = event.target.value;

    const persons = [...this.state.persons];

    persons[getIndex] = getObject;

    this.setState({
      persons: persons
    });
  };
  componentDidMount() {
    console.log("App.js, didMount ");
  }

  render() {
    console.log("App.js, Render ");
    const style = {
      backgroundColor: "red",
      padding: "10px",
      border: "1px solid #333",
      color: "#fff",
      cursor: "pointer"
    };

    const people = (
      <div>
        {this.state.persons.map((p, val) => {
          return (
            <Person
              key={p.id}
              name={p.name}
              age={p.age}
              changed={event => this.changeHandler(event, val)}
            ></Person>
          );
        })}
      </div>
    );

    return (
      <div>
        <h1>Test123</h1>
        <button style={style} onClick={this.clickHandler}>
          Switch Button
        </button>

        {this.state.showState ? (
          <div>
            {people}
            {(style.backgroundColor = "green")}
          </div>
        ) : null}
        <br />
        <button className="none" onClick={this.toggleHandler}>
          Switch Button
        </button>
      </div>
    );
  }
}

export default App;
