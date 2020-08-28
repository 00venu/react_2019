import React from "react";
import Skeleton from "react-loading-skeleton";
import ReactPaginate from "react-paginate";

const Flights = ({ state, slice, pageCount, handlePageClick }) => {
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
    <div>
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
};

export default Flights;
