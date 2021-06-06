import React from 'react';
import Message from './message.jsx';
import Photo from './photo.jsx';
import Head from './meshead.jsx';
import HR from './helpful.jsx'
///// key should be review_id
/// since cant post and cant get the review_id
/// use index
const MessageList = (props) => {
  const { list, helpful, report, notHelpful } = props;
  return (
    <div style ={ style }>
      { list.map((i, index)=>{
        return (
          <div
            key = { index }
            style ={container}>
            <br></br>
            <Head
              user = { i.reviewer_name }
              date={ i.date }
              rate={ i.rating }/>
            <Message
              text = { i.summary }
              style ={ summery }/>
            <br></br>
            <Message
              text = { i.body }
              style ={ body }/>
            <br></br>
            <Message
              text = { i.recommend }
              style ={ body }/>
            <br></br>
            <Photo
              photo = { i.photos } />
            <br></br>
            {(i.response !== null)?
              <Message
                res = { i.response }
                style = { response }/>
              :
                null}
            <br></br>
            <HR
              helpful = { i.helpfulness }
              notHelpful = { 0 } //  shoudl get the key from i
              no = { notHelpful }
              yes = { helpful }
              report = { report }
              index ={ index }/>
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
  width: '100%',
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