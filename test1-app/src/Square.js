import React from "react";
import { useCountRenders } from "./useCountRenders";

const Square = React.memo(({ txt, increment }) => {
  useCountRenders();
  return <button onClick={() => increment(txt)}>{txt}</button>;
});

export default Square;
