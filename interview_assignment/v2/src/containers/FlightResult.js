import React, { useState, useEffect } from "react";
import { flightInfo } from "../Data/Data";
import Flights from "./../components/Flights";

const FlightResults = () => {
  const [state, setState] = useState(false);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const data = flightInfo;
  const slice = data.slice(offset, offset + perPage);
  const pageCount = Math.ceil(flightInfo.length / perPage);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset1 = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset1);
    setState(false);
  };
  useEffect(() => {
    setTimeout(function () {
      setState(true);
    }, 500);
  }, [offset, currentPage]);

  return (
    <div>
      <Flights
        state={state}
        slice={slice}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};

export default FlightResults;
