import React, { useEffect,useState } from 'react';
import axios from 'axios';
import QAbody from './QAbody';
import PopOutQA from './PopOutQA';
import ButtonQA from './ButtonQA'

const QA = (props) => {
  const { id } = props;
  const [questions, setQuestions]= useState([]);
  const [isLoad, setIsLoad] = useState(false)
  const [isPopOut, setIsPopOut] = useState(false);
  const [isMore, setIsMore]=useState(true);
  const [isAddAanswer,setIsAddAanswer] = useState(false);

  useEffect(()=>{
    axios.get('/get', {
      params: {
        endpoint: `qa/questions/?product_id=${id}`,
      },
    })
      .then((res) => {
        const arr = res.data.results;
        setQuestions(arr);
        setIsLoad(true);
      })
      .catch(console.log);
  },[id])

  const addUserReview = ()=>{
    setIsPopOut(true)
  }
  const getMoreReviews=()=>{
    console.log()
  }

  const cancelAddQuestion =()=>{
    setIsPopOut(false)
  }

  const addQuestion = (obj) => {
    let arr = [...questions]
    arr.unshift(obj)
    setAnswer(arr)
  }

  if (isLoad) {
    return (
      <div>
        <h3>Question & Answer</h3>
        <div
          className="QAcontainer"
        >
          <div>search</div>
          <div className="Qabody">
            {questions.map((i)=>{
              return (
                <div
                  className="Qabody1"
                  key={i.question_id}
                >
                  <QAbody question={i}/>
                </div>
              )
            })}
          </div>
          <ButtonQA
            getMoreReviews={getMoreReviews}
            addUserReview={addUserReview}
            isMoreReviews={isMore}
          />
        </div>
        {isPopOut
          ?
          <PopOutQA
            addUserReview={addQuestion}
            cancelAddReview={cancelAddQuestion}
            target="questions"
            id={id}
          />
          :null}
      </div>
    )
  } else {
    return (
    <div>
      <div>QA</div>
      <div>Loading...</div>
    </div>
  )
  }

}

export default QA