import axios from 'axios';

export default function putHelpfulReview(obj, id) {
  axios.put('/reviews/helpful', {
    body: obj,
    params: {
      endpoint: `/reviews/${id}/helpful`,
    },
  })
    .then(console.log)
    .catch(console.log);
}
