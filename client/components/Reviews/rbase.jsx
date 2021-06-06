import React from 'react';
import Rbheader from './rbheader.jsx';
import MessageList from './rbmessage.jsx';
import Form from './form.jsx';
import Button from './button.jsx';

const Rbase = (props) =>{
  const { list, sort, helpful, notHelpful, report, add,
    more, addfunc, getTarget, addReview, moreBTN } = props;
  return (
    <div
      style = { style }>
      <Rbheader
        length = { list.length }
        sort = { sort }/>
      <MessageList
        list = { list }
        helpful = { helpful }
        report = { report }
        notHelpful = { notHelpful }/>
      <br></br>
      { add === true?
        <Form
          getTarget = { getTarget }
          submit = { addReview }/>
        :
          null }
      <Button
        moreBTN = { moreBTN }
        more = { more }
        add ={ addfunc } />
    </div>
  )
}

export default Rbase;

const style = {
  display:'flex',
  flexDirection: 'column',
  width:'100%'
}