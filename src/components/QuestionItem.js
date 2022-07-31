import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answers, index) => (
    <option key={index} value={index}>
      {answers}
    </option>
  ));


  function handleDeleteQuestion() {
    fetch(`http://localhost:4001/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  function handleUpdate(event) {
    fetch(`http://localhost:4001/questions/${id}`, {
      method: "PATCH",
      Headers:
      { "Content-Type": "application/json" },
      Body: {
        "correctIndex": event.target.value}
    })
      .then((r) => r.json())
      .then(() => console.log("updated!", event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  onChange={handleUpdate} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
