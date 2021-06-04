import React from 'react';
import Answer from './QAItem.jsx';

const QAItem = ({question}) => {

  return (
    <div>
      Question: {question.question_body} <br/>
      {/* {Object.entries(question.answers).map(([key, value]) => {
        return(
          <Answer answer={value} key={key}/>
        )
      })} */}
    </div>
  );
}

export default QAItem;