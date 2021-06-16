import { useEffect, useState } from 'react';

export default function useReview(id) {
  const [countStars, setCountStars] = useState(5);
  const [listUserReview, setListUserReview] = useState([]);
  const [listReported, setListReported] = useState([]);

  useEffect(async () => {
    setCountStars(5);
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
    countStars,
    listUserReview,
    listReported,
    starClicked,
    addUserReview,
    addListReported,
  });
}
