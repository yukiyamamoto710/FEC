import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewListHeader from './ReviewListHeader/ReviewListHeader';
import ReviewMSGList from './ReviewMSGList/ReviewMSGList';
// import Form from './form.jsx';
// import Button from './Button/Button';
// import PopOut from './popout.jsx';

const ReviewListBase = (props) => {
  // [{}] reviews stars 0
  const {
    reviews,
    stars,
  } = props;
  const [reviewsList, setReviewsList] = useState(reviews);
  const [userReview, setUserReview] = useState([]);
  const [sort, setSort] = useState('relevant');

  useEffect(() => {
    setReviewsList(reviews);
  }, [reviews]);

  return (
    <div
      style={style}
    >
      <ReviewListHeader
        len={reviewsList.length}
        sortBy={(target) => { setSort(target); }}
      />
      <ReviewMSGList
        reviewsList={reviewsList}
      />
      <br />
      {/* <Button
        moreBTNshow={moreBTN}
        moreReview={moreReview}
        addReview={addfunc}
      /> */}
    </div>
  );
};

export default ReviewListBase;

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};
