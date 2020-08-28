import React, { useState, useEffect } from "react";

const useValidation = () => {
  const [value, setValue] = useState({});
  const [duplicate, setDuplicate] = useState(false);
  const [dateVal, setDateVal] = useState({});

  const valHandler = (event, key, val) => {
    event.persist();
    setValue((prev) => {
      return {
        ...prev,
        [key]: val,
      };
    });
  };
  const dateHandler = (event, a, b) => {
    event.persist();
    setDateVal((prev) => {
      return {
        ...prev,
        [a]: b || event.target.value,
      };
    });
  };
  useEffect(() => {
    let getkeys = Object.values(value);
    let findDuplicate = getkeys.some((item) => {
      return getkeys.indexOf(item) !== getkeys.lastIndexOf(item);
    });
    setDuplicate(findDuplicate);
  }, [value]);

  return [value, valHandler, duplicate, dateVal, dateHandler];
};

export default useValidation;
