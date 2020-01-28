import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setQuestions } from "../ducks/reducer";
import "../styles/StandardView.scss";

const StandardView = props => {
  const [question, setQuestion] = useState("");
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=1&category=20&encode=url3986")
      .then(res => props.setQuestions(res.data.results));
  }, []);
  console.log(props.questions);
  function getQuestion() {
    setQuestion(props.questions[0].question);
  }
  console.log(question);
  return (
    <div className="StandarView-container">
      <button onClick={getQuestion}>Get Question</button>
      <main>
        {question !== "" && <h3>{decodeURIComponent(question)}</h3>}
        <h5>Catetory</h5>
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
