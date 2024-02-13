
import React, { useState } from "react";

const QuestionForm = ({ addQuestion }) => {
const [formData, setFormData] = useState({
  prompt: "",
  answers: [],
  correctIndex: 0,
});

const handleInputChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  fetch("http://localhost:4000/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((newQuestion) => {
      addQuestion(newQuestion);

      setFormData({
        prompt: "",
        answers: [],
        correctIndex: 0,
      });
    })
    .catch((error) =>
      console.error("Error adding new question:", error)
    );
};

return (
  <form onSubmit={handleFormSubmit}>
    {/* Render form inputs here */}
    <button type="submit">Submit</button>
  </form>
);
};

export default QuestionForm;
