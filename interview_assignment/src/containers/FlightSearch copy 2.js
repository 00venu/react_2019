import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";

const FlightSearch = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneway, setOneway] = useState(true);
  const [twoway, setTwoway] = useState(false);
  const [depart, setDepart] = useState("");
  const [goingTo, setGoingTo] = useState("");

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
  const departHandler = (e) => {
    setDepart(e);
  };
  const goingToHandler = (e) => {
    setGoingTo(e);
  };
  const advHandler = () => {
    let val;
    if (goingTo === "Select") {
      val = <div className="error">Required</div>;
    } else if (goingTo !== "Select" && goingTo !== "" && depart === goingTo) {
      val = <div className="error">Should not same !</div>;
    }
    return val;
  };

  return (
    <div className="search-form">
      <form>
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
          <select
            name="depart"
            onChange={(e) => departHandler(e.target.value)}
            onBlur={(e) => departHandler(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="form-control">
          <label>Going To</label>
          <select
            name="goingTo"
            onChange={(e) => goingToHandler(e.target.value)}
            onBlur={(e) => goingToHandler(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {advHandler()}
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
              selected={returnDate}
              onChange={(d) => setReturnDate(d)}
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
