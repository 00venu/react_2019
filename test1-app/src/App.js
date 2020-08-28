import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Hello from "./Hello";
import Square from "./Square";

const App = () => {
  const [count, setCount] = useState(0);
  const freeCount = [3, 12, 25];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );
  return (
    <div className="App">
      <Hello increment={increment} />
      <div>count: {count}</div>
      {freeCount.map((c) => {
        return <Square increment={increment} key={c} txt={c} />;
      })}
    </div>
  );
};

export default App;
