import React, { useEffect,useState } from 'react';
import axios from 'axios';
import QAbody from './QAbody';
import PopOutQA from './PopOutQA';
import MonkeyQA from './MonkeyQA';
import ButtonQA from './ButtonQA';
import MonkeyQAone from './MonkeyQAone';

const QA = (props) => {
  const { id } = props;
  const [listQuestions, setListQuestions]= useState([]);
  const [questions, setQuestions]= useState([]);
  const [isLoad, setIsLoad] = useState(false)
  const [isPopOut, setIsPopOut] = useState(false);
  const [isMore, setIsMore]=useState(true);
  const [isAddAanswer,setIsAddAanswer] = useState(false);
  const [search, setSearch] = useState('');
  const [isNoResult, setIsNoResult] = useState(false)

  useEffect(()=>{
    axios.get('/get', {
      params: {
        endpoint: `qa/questions/?product_id=${id}`,
      },
    })
      .then((res) => {
        const arr = res.data.results;
        setQuestions(arr.slice(0,2));
        setListQuestions(arr)
        setIsLoad(true);
      })
      .catch(console.log);
      setSearch('');
  },[id])

  const addUserReview = () => {
    setIsPopOut(true)
  }

  const getMoreReviews = () => {
    let arr = [...questions];
    const num = arr.length;
    const num1 = listQuestions.length;
    if(num + 2 >= num1){
      setIsMore(false)
    }
    setQuestions(listQuestions.slice(0,num + 2))
  }

  const cancelAddQuestion = () => {
    setIsPopOut(false)
  }

  const addQuestion = (obj) => {
    let arr = [...listQuestions]
    obj.asker_name = obj.name;
    obj.question_body = obj.body;
    obj.question_date = obj.date;
    obj.question_helpfulness = obj.helpfulness;
    obj.question_id = obj.id;
    obj.reported = false;
    obj.answers = [];
    arr.unshift(obj)

    setQuestions(arr)
    setIsPopOut(false)
  }

  const handleChangeText = (event) => {
    setSearch(event.target.value)
  }

  const handleClickSearch = () =>{
    if (search.length >= 3) {
      const arr = [...listQuestions];
      const result = arr.filter((i) => (
        i.question_body.includes(search)
      ))
      if(result.length !== 0) {
        setQuestions(result)
      } else {
        setIsNoResult(true)
      }
    }
  }

  const handleClickCancel = () => {
    setIsNoResult(false)
  }
  if (isLoad) {
    return (
      <div className="QA-wrapper">
        <h3>Question & Answer</h3>
        <div className="QAcontainer">
          <div className="QAheader1">
            {!isNoResult
              ?
              <MonkeyQAone classSize={'QAmonkey5'}/>
              :
              <button
                className="QAsearchBack"
                onClick={handleClickCancel}
              />
            }
            <input
              className="QAsearchTxt"
              type="text"
              onChange={handleChangeText}
              placeholder="search"/>
            <button
              className="QAsearchGO2"
              onClick={handleClickSearch}
            />
          </div>
          {isNoResult
            ?
              <MonkeyQA />
            :null}
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
        <div className="popoutQA">
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
      </div>
    )
  } else {
    return (
      <div>
        <MonkeyQAone
          classSize={'QAmonkey1'}
          text="Loading"
        />
      </div>
    )
  }
}

export default QA