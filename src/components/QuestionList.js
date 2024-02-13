import React from "react";

const QuestionList = ({ questions, onDeleteQuestion, onUpdateCorrectAnswer }) => {
const handleDropdownChange = (questionId, newCorrectIndex) => {
  onUpdateCorrectAnswer(questionId, newCorrectIndex);
};

return (
  <div>
    <h2>Question List</h2>
    <ul>
      {questions.map((question) => (
        <li key={question.id}>
          {question.prompt}
          <select
            value={question.correctIndex}
            onChange={(e) => handleDropdownChange(question.id, e.target.value)}
          >
            {question.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            ))}
          </select>
          <button onClick={() => onDeleteQuestion(question.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
};

export default QuestionList;
