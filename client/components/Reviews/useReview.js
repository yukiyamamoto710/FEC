import { useEffect, useState } from 'react';
import ratingGET from './func/ratingGet/ratingGet';

export default function useReview(id) {
  const [isRatingLoad, setIsRatingLoad] = useState(false);
  const [countStars, setCountStars] = useState(5);
  const [rating, setRating] = useState({});
  const [listUserReview, setListUserReview] = useState([]);
  const [listReported, setListReported] = useState([]);

  useEffect(async () => {
    setCountStars(5);
    ratingGET('reviews/meta', id, setRating, setIsRatingLoad);
  }, [id]);

  const starClicked = (num) => {
    setCountStars(num);
  };

  const addUserReview = (obj) => {
    setListUserReview([...listUserReview, obj]);
  };

  const addListReported = (reportId) => {
    setListReported([...listReported, reportId]);
  };

  return ({
    isRatingLoad,
    countStars,
    rating,
    listUserReview,
    listReported,
    starClicked,
    addUserReview,
    addListReported,
  });
}
