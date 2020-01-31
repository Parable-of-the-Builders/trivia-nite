import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setQuestions } from "../ducks/reducer";
import "../styles/StandardView.scss";

const StandardView = props => {
  const [question, setQuestion] = useState();
  // useEffect(() => {
  //   getQuestion();
  // }, []);
  function getQuestion() {
    axios
      .get("https://opentdb.com/api.php?amount=1&category=20&encode=url3986")
      .then(res => setQuestion(res.data.results));
  }

  function shuffle(arr) {
    let newIndex, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newIndex = Math.floor(Math.random * (i + 1));
      temp = arr[i];
      arr[i] = arr[newIndex];
      arr[newIndex] = temp;
    }
    return arr;
  }
  console.log(question);
  return (
    <div className="StandarView-container">
      <button onClick={getQuestion}>Get Question</button>
      <main>
        {question &&
          question.map((val, index) => {
            let answers = [...val.incorrect_answers, val.correct_answer];
            return (
              <div key={index}>
                <h3>{decodeURIComponent(val.question)}</h3>
                <h5>{val.category}</h5>
              </div>
            );
          })}
      </main>
      <section>
        <select name="" id="">
          <option value="">Select an Answer</option>
        </select>
      </section>
    </div>
  );
};
const mapStateToProps = redux => {
  const { questions } = redux;
  return { questions };
};
export default connect(mapStateToProps, { setQuestions })(StandardView);
