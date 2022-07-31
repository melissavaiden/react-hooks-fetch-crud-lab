import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList, setQuestionList}) {
  useEffect(() => {
    fetch("http://localhost:4001/questions")
      .then((r) => r.json())
      .then((questions) => setQuestionList(questions));
  }, [setQuestionList]);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList.map((question) => {
           return <QuestionItem question={question}/>
          })}
      </ul>
    </section>
  );
}

export default QuestionList;
