import React, { useRef } from "react";
export const useCountRenders = () => {
  const render = useRef(0);
  console.log(render.current++);
};
