import React from 'react';

const Form = (props)=>{
  const { getTarget, submit } = props;
  return (
    <div>
      <div style ={div1}>
        <div style ={div}>
          Name:
        </div>
        <input type='text' id ='reviewer_name' onChange={ getTarget }></input>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Title:
        </div>
        <input type='text' id ='summary' onChange={ getTarget }></input>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Description:
        </div>
        <textarea id ='body' onChange={ getTarget }></textarea>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Recommend:
        </div>
        <select id ='recommend' onChange={ getTarget }>
          <option>YES</option>
          <option>NO</option>
        </select>
      </div>
      <div style ={div1}>
        <div style ={div}>
          Rating:
        </div>
        <select id ='rating' onChange={ getTarget }>
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


export default Form

const div = {
  width :'95%',
}
const div1 = {
  display:'flex'
}