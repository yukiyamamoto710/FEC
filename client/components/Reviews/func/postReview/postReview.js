import axios from 'axios';

export default function postReview(obj, id) {
  axios.post('/post/review', {
    body: obj,
    params: {
      endpoint: `/reviews/?product_id=${id}`,
    },
  })
    .then((res) => {
      const arr = res.data.results;
      console.log(arr);
    })
    .catch((err) => console.log);
};