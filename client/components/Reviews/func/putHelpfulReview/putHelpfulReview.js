import axios from 'axios';

export default function putHelpfulReview(obj, id) {
  axios.put('/reviews/helpful', {
    body: obj,
    params: {
      endpoint: `/reviews/${id}/helpful`,
    },
  })
    .then((res) => {
      const arr = res.data;
      console.log(arr);
    })
    .catch((err) => console.log);
};