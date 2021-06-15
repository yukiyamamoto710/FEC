import { useState, useEffect } from 'react';
import reviewsGET from '../func/reviewsGet/reviewsGet';
import moreReviewsGet from '../func/moreReviewsGet/moreReviewsGet';

export default function useReviewListBase(id, listReported, listUserReview, stars) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [isMoreReviews, setIsMoreReviews] = useState(true);
  const [isReviewsLoad, setIsReviewsLoad] = useState(false);
  const [listReviews, setListReviews] = useState([]);

  useEffect(() => {
    setIsMoreReviews(true);
    setSort('relevant');
    reviewsGET('reviews', id, 2, sort, setData, setIsReviewsLoad);
  }, [id]);

  useEffect(() => {
    const Reviews = data.filter((i) => (
      !listReported.includes(i.review_id)
    ));
    const StarsReview = Reviews.filter((i) => (
      Number(i.rating) <= Number(stars)
    ));
    const UserReview = listUserReview.filter((i) => (
      Number(i.product_id) === Number(id)
    ));
    const newReviews = UserReview.concat(StarsReview);
    setListReviews(newReviews);
  }, [isReviewsLoad, listReported, data, listUserReview, stars]);

  useEffect(() => {
    let num;
    if (data.length === 0) {
      num = 2;
    } else {
      num = data.length;
    }
    reviewsGET('reviews', id, num, sort, setData);
  }, [sort]);

  const sortBy = (str) => {
    setSort(str);
  };

  const getMoreReviews = async () => {
    const results = await moreReviewsGet({
      string: 'reviews',
      id,
      count: data.length + 2,
      sort,
    });
    if (results.length > data.length) {
      setData(results);
    } else {
      setIsMoreReviews(false);
    }
  };

  return {
    data,
    sort,
    isMoreReviews,
    isReviewsLoad,
    listReviews,
    getMoreReviews,
    sortBy,
  };
}
