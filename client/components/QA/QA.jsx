import React from 'react';
import QAItem from './QAItem.jsx';


const QA = ({questions}) => {
  return (
    <div>
      {questions.results.map(question => <QAItem question={question} key={question.question_id}/>)}
    </div>
  );
}
export default QA;