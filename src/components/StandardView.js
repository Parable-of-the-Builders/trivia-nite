import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setQuestions } from "../ducks/reducer";
import "../styles/StandardView.scss";
import Answers from "./Answers";
import useToggle from "../hooks/useToggle";

const StandardView = props => {
  const [question, setQuestion] = useState([]);
  const [toggle, setToggle] = useToggle();
  const [diff, setDiff] = useState("");

  useEffect(() => {}, [diff]);

  function getQuestion() {
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&difficulty=${diff}&encode=url3986`
      )
      .then(res => setQuestion(res.data.results));
  }

  function shuffle(arr) {
    let ctr = arr.length;
    let index, temp;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
    }

    return arr;
  }
  console.log(question);
  console.log("hit", diff);
  return (
    <div className="StandarView-container">
      <select
        className="difficulty-dropdown"
        value={diff}
        onChange={e => setDiff(e.target.value)}
      >
        <option value="easy">Select a Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      {diff && (
        <button className="question-btn" onClick={getQuestion}>
          Get Question
        </button>
      )}
      <main>
        {question &&
          question.map((val, index) => {
            console.log(val.correct_answer);
            const rightAnswer = decodeURIComponent(val.correct_answer);
            let answers = [...val.incorrect_answers, val.correct_answer];
            shuffle(answers);
            return (
              <div key={index}>
                <h5>Category: {decodeURIComponent(val.category)}</h5>
                <h3>{decodeURIComponent(val.question)}</h3>
                <Answers
                  answers={answers}
                  getQuestion={getQuestion}
                  rightAnswer={rightAnswer}
                />
              </div>
            );
          })}
      </main>
    </div>
  );
};
const mapStateToProps = redux => {
  const { questions } = redux;
  return { questions };
};
export default connect(mapStateToProps, { setQuestions })(StandardView);
