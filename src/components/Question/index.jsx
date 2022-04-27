import React, { useCallback, useState } from "react";
import "./style.css";

function Question({ question }) {
  const [currentAnswer, setCurrentAnswer] = useState("");

  return (
    <div className="question">
      <h3>
        Câu {question.id}.{question.title}
      </h3>
      <div className="answer" data-answer={question.right_answer}>
        {question.answers.map((answer) => (
          <button
            key={answer.key}
            onClick={() => {
              setCurrentAnswer(answer.key);
            }}
            disabled={
              currentAnswer !== "" && answer.key !== question.right_answer
            }
            data-answer={answer.key}
            className={`${answer.key === question.right_answer} ${
              currentAnswer === "" ? "null" : ""
            }`}
          >
            {answer.key}. {answer.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
