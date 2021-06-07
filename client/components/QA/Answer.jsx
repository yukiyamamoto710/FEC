import React from 'react';
import Helpful from './Helpful.jsx';

const Answer = ({answer}) => {
  return (
    <div>
      {answer}
      <br/>
      <Helpful/>
    </div>
  );
}
export default Answer;