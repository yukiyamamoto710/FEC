import React from 'react';
import QAItem from './QAItem.jsx';
import AddQ from './AddQ.jsx';


const QA = ({questions}) => {
  return (
    <div>
      <h3>Questions and Answers</h3>
      <AddQ/>
      {questions.results.map(question => <QAItem question={question} key={question.question_id}/>)}
    </div>
  );
}
export default QA;