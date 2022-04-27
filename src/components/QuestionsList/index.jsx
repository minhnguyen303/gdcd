import React from "react";
import Question from "../Question";

QuestionsList.propTypes = {};

const questionList = [
  {
    id: 1,
    title:
      "Nhà nước pháp quyền là nhà nước quản lý mọi mặt của đời sống xã hội bằng",
    answers: [
      { key: 'A', value: "Thói quen" },
      { key: 'B', value: "Tín ngưỡng" },
      { key: 'C', value: "Pháp luật" },
      { key: 'D', value: "Tập quán" },
    ],
    right_answer: "A",
  },
  {
    id: 2,
    title:
      "Nhà nước pháp quyền là nhà nước quản lý mọi mặt của đời sống xã hội bằng",
    answers: [
      { key: 'A', value: "Thói quen" },
      { key: 'B', value: "Tín ngưỡng" },
      { key: 'C', value: "Pháp luật" },
      { key: 'D', value: "Tập quán" },
    ],
    right_answer: "A",
  },
  {
    id: 3,
    title:
      "Nhà nước pháp quyền là nhà nước quản lý mọi mặt của đời sống xã hội bằng",
    answers: [
      { key: 'A', value: "Thói quen" },
      { key: 'B', value: "Tín ngưỡng" },
      { key: 'C', value: "Pháp luật" },
      { key: 'D', value: "Tập quán" },
    ],
    right_answer: "A",
  },
];

function QuestionsList(props) {
  return (
    <div>
      {questionList.map((question) => (
        <div key={question.id}>
          <Question question={question} />
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
