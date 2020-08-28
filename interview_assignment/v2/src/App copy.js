import React, { useState, useEffect } from "react";
import "./App.css";
import Skeleton from "react-loading-skeleton";
import { flightInfo } from "./Data/Data";
import ReactPaginate from "react-paginate";

function App() {
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

  let flight = <Skeleton className="sky" count={slice.length} />;

  if (state) {
    flight = slice.map((flightDetails, index) => {
      return (
        <div key={index}>
          <ul className="flights" key={index}>
            <li>{flightDetails.airlines}</li>
            <li>{flightDetails.flightNo}</li>
            <li>{flightDetails.time.depart}</li>
            <li>{flightDetails.time.arrive}</li>
            <li>{flightDetails.time.duration}</li>
            <li>{flightDetails.stops}</li>
            <li>{flightDetails.price}</li>
          </ul>
        </div>
      );
    });
  }

  return (
    <div className="App">
      {flight}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
