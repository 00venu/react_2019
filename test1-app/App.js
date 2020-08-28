import React from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </section>
    </div>
  );
};

export default App;
