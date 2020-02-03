import React from "react";

function Answers(props) {
  console.log(props);
  const { rightAnswer, answers } = props;
  return (
    <div>
      {answers.map((answer, index) => {
        let val = decodeURIComponent(answer);
        return (
          <div key={index}>
            <button value={val}>{decodeURIComponent(answer)}</button>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
