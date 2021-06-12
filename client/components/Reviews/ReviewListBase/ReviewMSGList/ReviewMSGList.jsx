import React from 'react';
import Message from '../../message';
import Photos from '../../Photos/Photos';
import MSGHeader from './MSGHeader/MSGHeader';
import HR from '../../helpful';

// key should be review_id
// since cant post and cant get the review_id
// use index
const MessageList = (props) => {
  const {
    reviewsList,
  } = props;

  return (
    <div className="msgListBase">
      { reviewsList.map((i, index) => (
        <div
          key={index}
          className="msgContainer"
        >
          <MSGHeader
            user={i.reviewer_name}
            date={i.date}
            rate={i.rating}
          />
          <div className="msgSummary ">
            {i.summary}
          </div>
          {/* { i.click === undefined
            ? (
              <Message
                id={index}
                msgClick={msgClick}
                text={i.body}
              />
            )
            : (
              <Message
                id={index}
                style={body}
                msgClick={msgClick}
                text={i.body}
              />
            )} */}
          {i.recommend
            ? (
              <div className="msgBody">
                ✓ I recommend this product
              </div>
            )
            : null}
          <Photos
            photos={i.photos}
          />
          {(i.response !== null)
            ? (
              <Message
                res={i.response}
                style={response}
              />
            )
            : null}
          {/* <HR
            helpful={i.helpfulness}
            notHelpful={0} //  shoudl get the key from i
            no={notHelpful}
            yes={helpful}
            report={report}
            index={index}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '450px',
  overflow: 'auto',
};

const container = {
  borderBottom: '1px solid rgb(192,192,192)',
};

const summery = {
  fontSize: '12px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const body = {
  fontSize: '10px',
  margin: '5px',
};

const response = {
  border: '1px solid rgb(192,192,192)',
  backgroundColor: 'rgb(192,192,192)',
  fontSize: '10px',
  margin: '5px',
};
