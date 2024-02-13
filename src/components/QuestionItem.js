
import React from 'react';

const QuestionItem = ({ question }) => {
return (
  <li key={question.id}>
    {question.prompt}
  </li>
);
};

export default QuestionItem;
