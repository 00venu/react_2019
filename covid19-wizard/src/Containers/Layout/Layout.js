import React, { Component } from "react";
import Questions from "../../Components/Questions/Questions";
import Answer from "../Answers/Answer";

class Layout extends Component {
  state = {
    questions: {
      question: {
        title:
          "Do you have a history of international or domestic travel from a country or state with postitive COVID-19  cases in the last 14 days?",
        options: ["Yes", "No"],
        disabled: true,
      },
      loopYes: {
        question: {
          title: "Are you running fever?",
          options: ["Yes", "No"],
          disabled: true,
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
              "None",
            ],
            score: 0,
            values: [2, 1, 1, 3, 1, 1, 1, 0],
            id: "id-1",
          },
          loopYes: {
            question: {
              title: "High Risk",
              options: [],
            },
          },
          loopNo: {
            question: {
              title: "Medium Risk",
              options: [],
            },
          },
        },
        loopNo: {
          question: {
            title: "Are you following 14 days quarantine?",
            options: ["Yes", "No"],
            id: "end-1",
            result: "",
          },
          loopYes: {
            question: {
              title: "Low Risk",
              options: [],
            },
          },
          loopNo: {
            question: {
              title: "Medium Risk",
              options: [],
            },
          },
        },
      },
      loopNo: {
        question: {
          title: "Did you come in direct contact with a known COVID19 patient?",
          options: ["Yes", "No", "Not Sure"],
          confirm: "No",
          id: "end-2",
          result: "High Risk",
        },
        loopNotSure: {
          question: {
            title: "Are you a healthcare worker?",
            options: ["Yes", "No"],
            confirm: "No",
          },
          loopYes: {
            question: {
              title: "Are you having any two symptoms of the following?",
              options: [
                "Fever",
                "Breathlessness",
                "Dry Cough",
                "Fatigue",
                "None",
              ],
            },
            loopYes: {
              question: {
                title: "High Risk",
                options: [],
              },
            },
            loopNo: {
              question: {
                title: "Low Risk",
                options: [],
              },
            },
          },
          loopNo: {
            question: {
              title:
                "I live in a locality /building where COVID19 has been reported",
              options: ["Yes", "No"],
              confirm: "No",
            },
            loopYes: {
              question: {
                title: "Are you having any two symptoms of the following ?",
                options: [
                  "Fever",
                  "Breathlessness",
                  "Dry Cough",
                  "Fatigue",
                  "None",
                ],
              },
              loopYes: {
                question: {
                  title: "Do have any of the following conditions?",
                  options: [
                    "Diabetes",
                    "Asthma",
                    "Cancer",
                    "Cardiovascular Disease",
                    "Chronic Lung Disease",
                    "Chronic Kidney Disease",
                    "Chronic Liver Disease",
                    "None",
                  ],
                  id: "id-2",
                },
                loopYes: {
                  question: {
                    title: "High Risk",
                    options: [],
                  },
                },
                loopNo: {
                  question: {
                    title: "In last 48 hrs are your symptoms?",
                    options: ["Improving", "Worsening", "Same"],
                    confirm: "No",
                    result: "",
                  },
                  improve: {
                    question: {
                      title: "Low Risk",
                      options: [],
                    },
                  },
                  worse: {
                    question: {
                      title: "High Risk",
                      options: [],
                    },
                  },
                  same: {
                    question: {
                      title: "Medium Risk",
                      options: [],
                    },
                  },
                },
              },
              loopNo: {
                question: {
                  title: "Low Risk",
                  options: [],
                },
              },
            },
            loopNo: {
              question: {
                title: "Low Risk",
                options: [],
              },
            },
            // loopNo: {
            //   result: "Low Risk"
            // }
          },
        },
        loopNo: {
          question: {
            title: "Are you running fever?",
            options: ["Yes", "No"],
            confirm: "No",
          },
          loopNo: {
            question: {
              title: "Low Risk",
              options: [],
            },
          },
          loopYes: {
            question: {
              title: "Are you having any two of the following symptoms?",
              options: ["Breathlessness", "Dry Cough", "Fatigue", "None"],
              confirm: "Yes",
              result: "",
            },
            loopNo: {
              question: {
                title: "Low Risk",
                options: [],
              },
            },
            loopYes: {
              question: {
                title: "Medium Risk",
                options: [],
              },
            },
            // loopYes: {
            //   result: "Medium Risk"
            // }
          },
        },
        loopYes: {
          question: {
            title: "High Risk",
            options: [],
          },
        },
      },
    },
    setval: [],
    buttonIndex: null,
    answers: {
      question: [],
      answer: [],
    },
    confirm: false,
    addClass: false,
    ansArr: [],
    score: 0,
    values: [2, 1, 1, 3, 1, 1, 1, 0],
    anArr: [],
  };

  componentDidUpdate(prevProps) {
    window.scrollTo(0, document.body.scrollHeight);
  }

  buttonClickHandler = (value, question, length, ind, id) => {
    let val = this.state.setval;
    let question1 = this.state.answers.question;
    let answer1 = this.state.answers.answer;

    switch (value) {
      case "Yes":
        val.push(["loopYes"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });

        break;
      case "No":
        val.push(["loopNo"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });
        break;
      case "Not Sure":
        val.push(["loopNotSure"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });
        break;
      case "Improving":
        val.push(["improve"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });
        break;
      case "Worsening":
        val.push(["worse"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });
        break;
      case "Same":
        val.push(["same"]);
        question1.push(question);
        answer1.push(value);
        this.setState({
          setval: val,
          answers: {
            question: question1,
            answer: answer1,
          },
        });
        break;
    }
    if (length > 3) {
      let ansArr = this.state.ansArr;
      let anArr = this.state.anArr;

      console.log(ansArr);
      if (value !== "None") {
        this.setState({
          confirm: true,
          addClass: true,
          buttonIndex: ind,
        });
      }
      if (length === 5 || length === 4) {
        ansArr.push(value);

        if (value === "None" && ansArr.length > 1) {
          val.push(["loopYes"]);
          question1.push(question);
          answer1.push(ansArr);
          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
          // console.log(answer1);
        } else if (value === "None" && ansArr.length === 1) {
          val.push(["loopNo"]);
          question1.push(question);
          answer1.push(ansArr);
          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
        }
        // console.log(answer1);
      }
      if (length === 8 && id === "id-1") {
        let score = this.state.score;
        //let vals = this.state.questions.loopYes.loopYes.question.options;

        let values = [2, 1, 1, 3, 1, 1, 1, 0];
        score += values[ind];
        this.setState({ score: score });
        ansArr.push(value);
        //console.log(ansArr);

        if (
          value === "None" &&
          this.state.score >= 0 &&
          this.state.score <= 4
        ) {
          ansArr = ansArr.filter((item, index) => {
            return ansArr.indexOf(item) === index;
          });

          val.push(["loopNo"]);
          question1.push(question);
          answer1.push(ansArr);
          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
          //console.log(this.state.answers.answer);
        } else if (value === "None" && this.state.score > 4) {
          ansArr = ansArr.filter((item, index) => {
            return ansArr.indexOf(item) === index;
          });

          val.push(["loopYes"]);
          question1.push(question);
          answer1.push(ansArr);
          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
          //console.log(this.state.answers.answer);
        }
      }
      if (length === 8 && id === "id-2") {
        anArr.push(value);
        if (value === "None" && anArr.length > 1) {
          val.push(["loopYes"]);
          question1.push(question);
          answer1.push(anArr);

          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
          // console.log(answer1);
        }
        if (value === "None" && anArr.length === 1) {
          val.push(["loopNo"]);
          question1.push(question);
          answer1.push(anArr);
          console.log(answer1);
          this.setState({
            setval: val,
            buttonIndex: null,
            confirm: false,
            answers: {
              question: question1,
              answer: answer1,
            },
          });
        }
      }
    }
  };
  render() {
    let list = this.state.answers.question.map((a, index) => {
      return (
        <Answer
          key={a}
          val={a}
          index={index}
          answer={this.state.answers.answer}
        />
      );
    });
    return (
      <div>
        <div
          style={{
            maxWidth: "780px",
            margin: "auto",
            padding: "10px",
            paddingBottom: 0,
          }}
        >
          {list}
        </div>
        <Questions
          initialQuestion={this.state.questions}
          buttonClick={this.buttonClickHandler}
          setVal={this.state.setval}
          confirm={this.state.confirm}
          addClass={this.state.addClass}
          buttonIndex={this.state.buttonIndex}
        />
      </div>
    );
  }
}

export default Layout;
