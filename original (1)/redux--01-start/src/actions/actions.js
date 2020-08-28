export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const RESULT = "RESULT";
export const DELETE = "DELETE";

export const add = val => {
  return {
    type: "ADD",
    val: val
  };
};
