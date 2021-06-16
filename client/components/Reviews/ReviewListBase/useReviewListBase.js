import { useState, useEffect } from 'react';
import moreReviewsGet from '../func/moreReviewsGet/moreReviewsGet';

export default function useReviewListBase(id, listReported, listUserReview, stars) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [isMoreReviews, setIsMoreReviews] = useState(true);
  const [isReviewsLoad, setIsReviewsLoad] = useState(false);
  const [listReviews, setListReviews] = useState([]);

  useEffect(async () => {
    setIsMoreReviews(true);
    setSort('relevant');
    const results = await moreReviewsGet({
      string: 'reviews',
      id,
      count: 2,
      sort,
    });
    setData(results);
    setIsReviewsLoad(true);
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

  useEffect(async () => {
    let num;
    if (data.length === 0) {
      num = 2;
    } else {
      num = data.length;
    }
    const result = await moreReviewsGet({
      string: 'reviews',
      id,
      count: num,
      sort,
    });
    setData(result);
  }, [sort]);

  const sortBy = (str) => {
    setSort(str);
  };

  const getMoreReviews = async () => {
    const result = await moreReviewsGet({
      string: 'reviews',
      id,
      count: data.length + 2,
      sort,
    });
    if (result.length > data.length) {
      setData(result);
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
