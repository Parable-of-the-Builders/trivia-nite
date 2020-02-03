import React from "react";
import Swal from "sweetalert2";

function Answers(props) {
  console.log(props);
  const { rightAnswer, answers } = props;

  function handleClick(answer) {
    if (answer === rightAnswer) {
      Swal.fire("You got it Right!!!", "Congrats", "success");
      props.getQuestion();
    } else {
      Swal.fire("Oh No Sorry", "try again", "error");
    }
  }
  return (
    <div>
      {answers.map((answer, index) => {
        let val = decodeURIComponent(answer);
        return (
          <div key={index}>
            <button onClick={() => handleClick(val)} value={val}>
              {decodeURIComponent(answer)}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
