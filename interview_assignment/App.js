import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: [
      {
        id: "123-s2-546",
        name: "John Jacobs",
        items: ["bucket", "bottle"],
        address: "1st Cross, 9th Main, abc Apartment",
        pincode: "5xx012",
      },
      {
        id: "123-s3-146",
        name: "David Mire",
        items: ["Bedroom Set"],
        address: "2nd Cross, BTI Apartment",
        pincode: "4xx012",
      },
      {
        id: "223-a1-234",
        name: "Soloman Marshall",
        items: ["bottle"],
        address: "Riverbed Apartment",
        pincode: "4xx032",
      },
      {
        id: "121-s2-111",
        name: "Ricky Beno",
        items: ["Mobile Set"],
        address: "Sunshine City",
        pincode: "5xx072",
      },
      {
        id: "123-p2-246",
        name: "Sikander Singh",
        items: ["Air Conditioner"],
        address: "Riverbed Apartment",
        pincode: "4xx032",
      },
      {
        id: "b23-s2-321",
        name: "Ross Wheeler",
        items: ["Mobile"],
        address: "1st Cross, 9th Main, abc Apartement",
        pincode: "5xx012",
      },
      {
        id: "113-n2-563",
        name: "Ben Bish",
        items: ["Kitchen Set", "Chair"],
        address: "Sunshine City",
        pincode: "5xx072",
      },
      {
        id: "323-s2-112",
        name: "John Michael",
        items: ["Refrigerator"],
        address: "1st Cross, 9th Main, abc Apartement",
        pincode: "5xx012",
      },
      {
        id: "abc-34-122",
        name: "Jason Jordan",
        items: ["Mobile"],
        address: "Riverbed Apartment",
        pincode: "4xx032",
      },
    ],
    inputVal: "",
  };
  highlightQuery = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b style={{ color: "#007dc5", fontStyle: "italic" }}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  render() {
    let keyword = this.state.inputVal;
    keyword = keyword.toLowerCase();
    let filtered = null;
    filtered = this.state.data.filter((entry) =>
      Object.values(entry).some((val) => {
        if (!Array.isArray(val)) {
          return typeof val === "string" && val.toLowerCase().includes(keyword);
        } else {
          for (let i of val) {
            let newVal = val.join(" ");
            return (
              typeof newVal === "string" &&
              newVal.toLowerCase().includes(keyword)
            );
          }
        }
      })
    );
    if (keyword === "") filtered = null;
    filtered =
      filtered !== null
        ? filtered.map((card) => {
            return (
              <li key={card.id}>
                <h4>{this.highlightQuery(card.id, this.state.inputVal)}</h4>
                <h5>{this.highlightQuery(card.name, this.state.inputVal)}</h5>
                <div>
                  Orders:{" "}
                  {this.highlightQuery(
                    card.items.join(", "),
                    this.state.inputVal
                  )}
                </div>
                <div>
                  {this.highlightQuery(card.address, this.state.inputVal)},{" "}
                  {this.highlightQuery(card.pincode, this.state.inputVal)}
                </div>
              </li>
            );
          })
        : null;

    if (filtered !== null && filtered.length === 0) {
      filtered = <h3>Not Found</h3>;
    }

    return (
      <React.Fragment>
        <ul>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) =>
              this.setState({ inputVal: event.target.value })
            }
          />
          {filtered}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
