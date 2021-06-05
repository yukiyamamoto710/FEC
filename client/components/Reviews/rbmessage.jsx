import React from 'react';
import Message from './message.jsx';
import Photo from './photo.jsx';
import Head from './meshead.jsx';
import HR from './helpful.jsx'
///// need head with stars
const MessageList = (props) => {
  const { list, func1, func2 } = props;
  return (
    <div style ={ style }>
      { list.map((i, index)=>{
        return (
          <div key = { i.review_id } style ={container}>
            <br></br>
            <Head user = { i.reviewer_name } date={ i.date } rate={ i.rating }/>
            <Message text = { i.summary } style ={ summery }/>
            <br></br>
            <Message text = { i.body } style ={ body }/>
            <br></br>
            <Message text = { i.recommend } style ={ body }/>
            <br></br>
            <Photo photo = { i.photos } />
            <br></br>
            <Message res = { 'asdsadsad'} style = { response }/>
            <br></br>
            <HR helpful = { i.helpfulness } func1 = { func1 } func2 = { func2 } index ={ index }/>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList;

const style = {
  display: 'flex',
  flexDirection:'column',
  width: '60%',
}

const container = {
  borderBottom:'1px solid rgb(192,192,192)'
}
const summery = {
  fontSize: '12px',
  fontWeight: 'bold'
}

const body = {
  fontSize: '10px'
}

const response = {
  border:'1px solid rgb(192,192,192)',
  backgroundColor: 'rgb(192,192,192)',
  fontSize: '10px'
}