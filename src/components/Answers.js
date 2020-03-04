import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../styles/Answers.scss";

function Answers(props) {
  const { rightAnswer, answers } = props;
  let [count, setCount] = useState(0);
  useEffect(() => {
    sessionStorage.setItem("count", count);
    document.title = `${count} correct`;
  }, [count]);
  function handleClick(answer) {
    if (answer === rightAnswer) {
      Swal.fire("You got it Right!!!", "Congrats", "success");
      props.getQuestion();
      setCount((count += 1));
    } else {
      Swal.fire("Oh No Sorry", "try again", "error");
      //Setting questions so that Users only gets one try.
      props.getQuestion();
    }
  }
  console.log(count);
  return (
    <div>
      {answers.map((answer, index) => {
        let val = decodeURIComponent(answer);
        return (
          <div key={index}>
            <button
              className="Answer-btn"
              onClick={() => handleClick(val)}
              value={val}
            >
              {decodeURIComponent(answer)}
            </button>
          </div>
        );
      })}
      <h3>Questions Answered Correctly</h3>
      <h2 style={{ color: "#f6b93b" }}>{count}</h2>
    </div>
  );
}

export default Answers;
