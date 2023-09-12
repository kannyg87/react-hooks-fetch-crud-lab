import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quest, setQuest] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setQuest(data))
  }, [])

  return (
    <>
      <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quest.map((q) => (
          <QuestionItem question={q} key={q.id} quest={quest} setQuest={setQuest} />
        ))}
      </ul>
      </section>

    </>
  );
}

export default QuestionList;
