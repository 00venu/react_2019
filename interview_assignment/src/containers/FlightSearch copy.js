import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useFormik, ErrorMessage } from "formik";
import * as yup from "yup";

import "react-datepicker/dist/react-datepicker.css";
import "./FlightSearch.css";

const validationSchema = yup.object({
  depart: yup.string().required("Required!"),
  goingTo: yup.string().required("Required!"),
  departDate: yup.date().required("Required!"),
});

const FlightSearch = () => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [oneway, setOneway] = useState(true);
  const [twoway, setTwoway] = useState(false);

  const formik = useFormik({
    initialValues: {
      depart: "",
      goingTo: "",
      departDate: "",
    },
    validationSchema,
  });

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

          <select name="depart" {...formik.getFieldProps("depart")}>
            <option value="">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {formik.touched.depart && formik.errors.depart ? (
            <div className="error">{formik.errors.depart}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Going To</label>
          <select name="goingTo" {...formik.getFieldProps("goingTo")}>
            <option value="">Select</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {formik.touched.goingTo && formik.errors.goingTo ? (
            <div className="error">{formik.errors.goingTo}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Depart Date</label>
          <DatePicker
            name="departDate"
            selected={departDate}
            onChange={(d, event) => {
              event.persist = () => {};
              formik.handleChange("departDate", event);
              setDepartDate(d);
              // console.log(formik.handleChange("departDate", event));
            }}
            minDate={new Date()}
            dateFormat="dd MMM yyyy"
            placeholderText="dd mm yyyy"
            onBlur={formik.handleBlur}
          />
          {formik.touched.departDate && formik.errors.departDate ? (
            <div className="error">{formik.errors.departDate}</div>
          ) : null}
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
