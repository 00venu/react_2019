import React, { Component } from "react";
import Input from "./Input/Input";

class App extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        valid: true,
        finalVal: false
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "+91"
        },
        value: "",
        validation: {
          required: true
        },
        valid: true,
        finalVal: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "example@sample.com"
        },
        value: "",
        validation: {
          required: true
        },
        valid: true,
        finalVal: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "select", displayValue: "Select" },
            { value: "fatest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "",
        finalVal: true
      },
      comments: {
        elementType: "textarea",
        elementConfig: {
          type: "",
          placeholder: "comments"
        },
        value: "",
        validation: {
          required: true
        },
        valid: true,
        finalVal: false
      }
    },
    formButton: true
  };
  checkValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
    }

    return isValid;
  };

  changeHandler = (event, id) => {
    let getObj = { ...this.state.orderForm };
    let detailedObj = { ...getObj[id] };
    detailedObj.value = event.target.value;
    if (detailedObj.hasOwnProperty("valid")) {
      detailedObj.valid = this.checkValidation(
        detailedObj.value,
        detailedObj.validation
      );
      detailedObj.finalVal = detailedObj.valid;
    }
    getObj[id] = detailedObj;
    let mainKeys = Object.keys(getObj);
    let total = mainKeys.map(f => {
      return getObj[f].finalVal;
    });
    let final = total.includes(false);
    this.setState({ orderForm: getObj, formButton: final });
  };

  render() {
    let orderFormkeys = [];
    for (let key in this.state.orderForm) {
      orderFormkeys.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    return (
      <div>
        {orderFormkeys.map(element => {
          return (
            <Input
              key={element.id}
              elements={element.config}
              label={element.id}
              change={event => this.changeHandler(event, element.id)}
            />
          );
        })}
        <div
          style={{
            width: "400px",
            margin: "10px auto"
          }}
        >
          <button disabled={this.state.formButton}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default App;
