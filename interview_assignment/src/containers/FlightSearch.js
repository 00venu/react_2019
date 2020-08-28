import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";
import useValidation from "../hooks/useValidation";

const FlightSearch = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneway, setOneway] = useState(true);
  const [twoway, setTwoway] = useState(false);
  const [value1, setValue1] = useState({});
  const [value, valHandler, duplicate, dateVal, dateHandler] = useValidation();
  const onewayHandler = (e) => {
    e.preventDefault();
    setOneway(true);
    setTwoway(false);
  };
  const twowayHandler = (e) => {
    e.preventDefault();
    setOneway(false);
    setTwoway(true);
  };
  const uref = useRef();
  const uref1 = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    setValue1({ depart: "Select" });
    // console.log(value);
  };
  useEffect(() => {
    setValue1(value);
  }, [value]);

  return (
    <div className="search-form">
      <form onSubmit={formSubmit}>
        <div className="btn-parent">
          <button
            className={oneway ? "btn-outline-active" : "btn-outline"}
            onClick={onewayHandler}
          >
            ONE WAY
          </button>
          <button
            className={twoway ? "btn-outline-active" : "btn-outline"}
            onClick={twowayHandler}
          >
            ROUND TRIP
          </button>
        </div>
        {duplicate && value.depart !== "Select" ? (
          <div className="error" style={{ fontWeight: "bold" }}>
            Destination and arrival should not be same cities !
          </div>
        ) : null}
        <div className="form-control">
          <label>Depart From</label>
          <select
            name="depart"
            onChange={(event) => {
              valHandler(event, event.target.name, event.target.value);
            }}
            // onBlur={(e) => {
            //   valHandler(e);
            // }}
            // onBlur={() => {}}
            className={
              duplicate || value1.depart === "Select" ? "red-border" : null
            }
          >
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        {value1.depart === "Select" ? (
          <div className="error">Required!</div>
        ) : null}
        <div className="form-control">
          <label>Going To</label>
          <select
            name="goingTo"
            // onChange={(e) => valHandler(e)}
            // onBlur={(e) => valHandler(e)}
            className={
              duplicate || value.goingTo === "Select" ? "red-border" : null
            }
          >
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        {value.goingTo === "Select" ? (
          <div className="error">Required!</div>
        ) : null}
        <div className="form-control">
          <label>Depart Date</label>
          <DatePicker
            className={dateVal.departDate === "" ? "red-border" : null}
            name="departDate"
            ref={uref}
            selected={departDate}
            onChange={(d, event) => {
              setDepartDate(d);
              dateHandler(
                event,
                uref.current.props.name,
                event.target.innerHTML
              );
              //console.log(event.target.value);
            }}
            minDate={new Date()}
            dateFormat="dd MMM yyyy"
            placeholderText="dd mm yyyy"
          />
        </div>
        {dateVal.departDate === "" ? (
          <div className="error">Required!</div>
        ) : null}
        {twoway ? (
          <div className="form-control">
            <label>Return Date</label>
            <DatePicker
              className={dateVal.returnDate === "" ? "red-border" : null}
              name="returnDate"
              ref={uref1}
              selected={returnDate}
              onChange={(d, event) => {
                setReturnDate(d);
                dateHandler(
                  event,
                  uref1.current.props.name,
                  event.target.innerHTML
                );
                //console.log(dateVal);
              }}
              minDate={departDate}
              dateFormat="dd MMM yyyy"
              placeholderText="dd mm yyyy"
            />
            {dateVal.returnDate === "" ? (
              <div className="error" style={{ paddingTop: "5px" }}>
                Required!
              </div>
            ) : null}
          </div>
        ) : null}
        <div className="search-parent">
          <button type="submit" className="btn-search">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearch;
