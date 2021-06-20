import axios from 'axios';

export default function postReview(obj, id) {
  axios.post('/post/review', {
    body: obj,
    params: {
      endpoint: `/reviews/?product_id=${id}`,
    },
  })
    .then(console.log)
    .catch(console.log);
}
