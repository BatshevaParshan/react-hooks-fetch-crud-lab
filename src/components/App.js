import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import YourComponent from "./YourComponent";

const App = () => {
const [page, setPage] = useState("List");
const [questions, setQuestions] = useState([]);

useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setQuestions(data))
    .catch((error) =>
      console.error("Error fetching questions:", error)
    );
}, []);

const handleAddQuestion = (newQuestion) => {
  setQuestions([...questions, newQuestion]);
};

const handleDeleteQuestion = (questionId) => {
  fetch(`http://localhost:4000/questions/${questionId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        setQuestions(questions.filter((question) => question.id !== questionId));
      } else {
        console.error("Error deleting question:", response.status);
      }
    })
    .catch((error) =>
      console.error("Error deleting question:", error)
    );
};

const handleUpdateCorrectAnswer = (questionId, newCorrectIndex) => {
  fetch(`http://localhost:4000/questions/${questionId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correctIndex: newCorrectIndex }),
  })
    .then((response) => {
      if (response.ok) {
        setQuestions((prevQuestions) =>
          prevQuestions.map((question) =>
            question.id === questionId
              ? { ...question, correctIndex: newCorrectIndex }
              : question
          )
        );
      } else {
        console.error("Error updating correct answer:", response.status);
      }
    })
    .catch((error) =>
      console.error("Error updating correct answer:", error)
    );
};

return (
  <main>
    <AdminNavBar onChangePage={setPage} />
    {page === "Form" ? (
      <QuestionForm addQuestion={handleAddQuestion} />
    ) : (
      <QuestionList
        questions={questions}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateCorrectAnswer={handleUpdateCorrectAnswer}
      />
    )}
  </main>
);
};

export default App;
