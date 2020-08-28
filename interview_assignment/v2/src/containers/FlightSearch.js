import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";

const FlightSearch = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneway, setOneway] = useState(true);
  const [twoway, setTwoway] = useState(false);
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

  const formSubmit = (event) => {
    event.preventDefault();
  };

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
        <div className="form-control">
          <label>Depart From</label>
          <select name="depart" onChange={(event) => {}}>
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-control">
          <label>Going To</label>
          <select name="goingTo">
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-control">
          <label>Depart Date</label>
          <DatePicker
            name="departDate"
            selected={departDate}
            onChange={(d) => {
              setDepartDate(d);
            }}
            minDate={new Date()}
            dateFormat="dd MMM yyyy"
            placeholderText="dd mm yyyy"
          />
        </div>
        {twoway ? (
          <div className="form-control">
            <label>Return Date</label>
            <DatePicker
              name="returnDate"
              selected={returnDate}
              onChange={(d, event) => {
                setReturnDate(d);
              }}
              minDate={departDate}
              dateFormat="dd MMM yyyy"
              placeholderText="dd mm yyyy"
            />
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
