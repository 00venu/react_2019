export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const SET_FIVE = "SET_FIVE";

export const setFive = (val) => {
  return {
    type: SET_FIVE,
    val: val,
  };
};

const counterIncrement1 = () => {
  return {
    type: COUNTER_INCREMENT,
  };
};

export const counterIncrement = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(counterIncrement1());
    }, 2000);
  };
};
