import React from "react";

function QuestionItem({ question, quest, setQuest }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const deletedQues = quest.filter((q) => q.id !== id);
        setQuest(deletedQues);
      });
  }

  function handleCorrectIndex(correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex : parseInt(correctIndex) }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data.formData));
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e)=> handleCorrectIndex(e.target.value)}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
