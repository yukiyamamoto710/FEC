import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import QAHelp from './QAHelp';
import Photos from '../Photos/Photos';
import putReportQA from './putReportQA';
import PopOutQA from './PopOutQA';


const QAbody = (props) => {
  const { question } = props;
  const key = Object.keys(question.answers);
  let keyArray = [];
  if (question.answers[key[0]] !== undefined) {
    keyArray = [...[question.answers[key[0]]]];
  }

  const [isMore, setIsMore] = useState(true);
  const [isAddAanswer,setIsAddAanswer] = useState(false);
  const [answer, setAnswer] = useState([...keyArray]);
  const [questions, setQuestions] = useState(question);

  const clickMore = () =>{
    const answerArray = [...answer];
    const num = answer.length + 2;
    const array = key.slice(0, num)
    const listAnswers = [];
    for(let i=0; i <array.length; i +=1) {
      listAnswers.push(question.answers[key[i]])
    }
    if (listAnswers.length === answerArray.length) {
      setIsMore(false)
    } else {
      setAnswer(listAnswers)
    }
  }

  const newArray = (arr) =>{
    const result = arr.map((i, index)=>{
      let obj = {id:'', url:''};
      obj.id = index;
      obj.url = i;
      return obj;
    })
    return result
  }

  const handleClickReport =(id)=>{
    putReportQA("answers",id)
  }

  const handleClickAnswer =(id)=>{
    setIsAddAanswer(true)
  }

  const cancelAanswer = () => {
    setIsAddAanswer(false)
  }

  const addAanswer = (obj) => {
    let arr = [...answer]
    arr.unshift(obj)
    setAnswer(arr)
    setIsAddAanswer(false)
  }

  return (
    <div>
      <div>
        <div className="QAheader">
          {isAddAanswer
          ?
            <PopOutQA
              addUserReview={addAanswer}
              cancelAddReview={cancelAanswer}
              target="answers"
              id={question.question_id}
            />
          :null}
          <div>
            Q:{question.question_body}
          </div>
          <QAHelp
            target="questions"
            countHelpful={question.question_helpfulness}
            reviewId={question.question_id}
            handleClick={handleClickAnswer}
          />
        </div>
      </div>
      <div className="QAbody">
        {answer.length !== 0
        ? answer.map((i) => {
            return (
              <div key = {i.id}>
                <div className ="answerBody">
                  A:<Message body={i.body} />
                </div>
                <Photos photos={newArray(i.photos)}/>
                <div className="answerBody">
                  <div className="QAnameBody">
                    <div>{'by :'}</div>
                    <div className="QAname">
                    {i.answerer_name}
                    </div>
                    <div>{'|'}</div>
                  </div>
                  <QAHelp
                    target="answers"
                    countHelpful={i.helpfulness}
                    reviewId={i.id}
                    handleClick={handleClickReport}
                  />
                </div>
              </div>
            )
          })
        :<div>No Answer </div>}
      </div>
      {isMore && answer.length !== 0
      ?
        <div
          role="button"
          tabIndex={0}
          onKeyPress={clickMore}
          className="QAanswerbutton"
          onClick={clickMore}
        >
          More answer
        </div>
      : null}
    </div>
  )
}

QAbody.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.any,
    question_helpfulness: PropTypes.number,
    question_id: PropTypes.number,
    question_body: PropTypes.string,
  })
};
QAbody.defaultProps = {
  question: {
    answers: [],
    question_helpfulness: 0,
    question_id: 12345,
    question_body: '',
  }
};
export default QAbody;