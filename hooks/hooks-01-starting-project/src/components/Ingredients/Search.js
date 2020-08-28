import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  let [enterFilter, setEnterFilter] = useState([]);

  const { filterIngredents } = props;
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterFilter === inputRef.current.value) {
        const query =
          enterFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enterFilter}"`;

        fetch("https://hooks-7cc00.firebaseio.com/ingredients.json" + query)
          .then((res) => {
            return res.json();
          })
          .then((resData) => {
            let loadIngredients = [];
            for (let key in resData) {
              loadIngredients.push({
                id: key,
                title: resData[key].title,
                amount: resData[key].amount,
              });
            }
            filterIngredents(loadIngredients);
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enterFilter, filterIngredents, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            ref={inputRef}
            value={enterFilter}
            onChange={(event) => setEnterFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
