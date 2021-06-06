import React from 'react';

const Form = (props)=>{
  const { func, submit } = props;
  return (
    <div>
      <div style ={div1}>
        <div style ={div}>
          Name:
        </div>
        <input type='text' id ='reviewer_name' onChange={func}></input>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Title:
        </div>
        <input type='text' id ='summary' onChange={func}></input>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Description:
        </div>
        <textarea id ='body' onChange={func}></textarea>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Recommend:
        </div>
        <select id ='recommend' onChange={func}>
          <option>YES</option>
          <option>NO</option>
        </select>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Rating:
        </div>
        <select id ='rating' onChange={func}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div style ={div1}>
        <div style ={div}>
           Photos:
        </div>
        <div>
          Not Availbe
        </div>
      </div>
      <button onClick = {submit}>Submit</button>
    </div>
  )
}

// date: "2020-10-10T00:00:00.000Z"
// helpfulness: 27
// response: null
// review_id: 358987

export default Form

const div = {
  width :'100px'
}
const div1 = {
  display:'flex'
}