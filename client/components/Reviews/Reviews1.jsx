import React, { useState, useEffect } from 'react';
import ratingGET from './func/ratingGet/ratingGet';
import reviewsGET from './func/reviewsGet/reviewsGet';
import Rating from './Rating/Rating';
import Rbase from './rbase';

export default function Reviews(props) {
  const { id } = props;
  const [ratingLoad, setRatingLoad] = useState(false);
  const [reviewsLoad, setReviewsLoad] = useState(false);
  const [rating, setRating] = useState({});
  const [reviews, setReviews] = useState([]);
  const [stars, setStars] = useState(5);

  useEffect(() => {
    console.log(id);
    reviewsGET('reviews', id, 2, 'relevant', setReviews, setReviewsLoad);
    ratingGET('reviews/meta', id, setRating, setRatingLoad);
  }, [id]);

  console.log(stars);

  if (ratingLoad && reviewsLoad) {
    return (
      <div>
        <Rating
          rating={rating}
          starsClicked={(num) => setStars(num)}
        />
        {/* <Rbase
          list={reviews}
          // sort = { this.sort }
          // helpful ={ this.helpful }
          // notHelpful ={ this.notHelpful }
          // report ={ this.report }
          // moreReview = { this.moreReview }
          // addfunc = { this.add }
          // msgClick = { this.msgClick }
          // moreBTN = { moreBTNshowed }/>
        /> */}
      </div>
    );
  }
  return <div> Loading... </div>;
}
