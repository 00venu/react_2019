import React, { Component } from "react";
import Questions from "../../Components/Questions/Questions";

class Layout extends Component {
  state = {
    questions: {
      question: {
        title:
          "Do you have a history of international or domestic travel from a country or state with postitive COVID-19  cases in the last 14 days?",
        options: ["Yes", "No"],
        disabled: false
      },
      loopYes: {
        question: {
          title: "Are you running fever?",
          options: ["Yes", "No"],
          disabled: false
        },
        loopYes: {
          question: {
            title: "Do you have 1 or more of the following symptoms?",
            options: [
              "Breathlessness",
              "Dry Cough",
              "Fatigue",
              "Pain around the chest",
              "Sore Throat",
              "Headache",
              "Nausea/Vomiting",
              "None"
            ],
            confirm: "Yes",
            score: 0,
            values: [2, 1, 1, 3, 1, 1, 1, 0],
            result: "",
            disabled: false
          }
        },
        loopNo: {
          question: {
            title: "Are you following 14 days quarantine?",
            options: ["Yes", "No"],
            id: "end-1",
            result: ""
          }
        }
      },
      loopNo: {
        question: {
          title: "Did you come in direct contact with a known COVID19 patient?",
          options: ["Yes", "No", "Not Sure"],
          confirm: "No",
          id: "end-2",
          result: "High Risk"
        },
        loopNotSure: {
          question: {
            title: "Are you a healthcare worker?",
            options: ["Yes", "No"],
            confirm: "No"
          },
          loopYes: {
            question: {
              title: "Are you having any two symptoms of the following?",
              options: [
                "Fever",
                "Breathlessness",
                "Dry Cough",
                "Fatigue",
                "None"
              ],
              id: "end-3",
              confirm: "No",
              result: ""
            }
          },
          loopNo: {
            question: {
              title:
                "I live in a locality /building where COVID19 has been reported",
              options: ["Yes", "No"],
              confirm: "No"
            },
            loopYes: {
              question: {
                title: "Are you having any two symptoms of the following ?",
                options: [
                  "Fever",
                  "Breathlessness",
                  "Dry Cough",
                  "Fatigue",
                  "None"
                ],
                confirm: "Yes"
              },
              loopYes: {
                question: {
                  title: "Do have any of the following conditions?",
                  options: [
                    "Diabetes",
                    "Cardiovascular Disease",
                    "Asthma",
                    "Chronic Lung Disease",
                    "Chronic Kidney Disease",
                    "Chronic Liver Disease",
                    "Cancer",
                    "None"
                  ],
                  confirm: "Yes"
                },
                loopYes: {
                  result: "High Risk"
                },
                loopNo: {
                  question: {
                    title: "In last 48 hrs are your symptoms?",
                    options: ["Improving", "Worsening", "Same"],
                    confirm: "No",
                    result: ""
                  }
                }
              },
              loopNo: {
                result: "Low Risk"
              }
            },
            loopNo: {
              result: "Low Risk"
            }
          }
        },
        loopNo: {
          question: {
            title: "Are you running fever?",
            options: ["Yes", "No"],
            confirm: "No"
          },
          loopNo: {
            result: "Low Risk"
          },
          loopYes: {
            question: {
              title: "Are you having any two of the following symptoms?",
              options: ["Breathlessness", "Dry Cough", "Fatigue", "None"],
              confirm: "Yes",
              result: ""
            },
            loopNo: {
              result: "Low Risk"
            },
            loopYes: {
              result: "Medium Risk"
            }
          }
        }
      }
    },
    setval: [],
    buttonIndex: null
  };

  buttonClickHandler = (value, ind) => {
    let val = this.state.setval;

    switch (value) {
      case "Yes":
        val.push(["loopYes"]);
        this.setState({ setval: val, disabled: true });
        break;
      case "No":
        val.push(["loopNo"]);
        this.setState({ setval: val, disabled: true });
        break;
      case "Not Sure":
        val.push(["loopNotSure"]);
        this.setState({ setval: val });
        break;
    }
    if (ind !== undefined) {
      console.log(ind);
      this.setState({ buttonIndex: ind });
    }
    return val.concat();
  };
  render() {
    let obj = this.state.questions;
    let questionLoop = this.buttonClickHandler().map(a => {
      obj = obj[a];
      return obj;
    });

    return (
      <div>
        <Questions
          initialQuestion={this.state.questions}
          buttonClick={this.buttonClickHandler}
          qLoop={questionLoop}
          btnIndex={this.state.buttonIndex}
          dis={this.state.disabled}
        />
      </div>
    );
  }
}

export default Layout;
