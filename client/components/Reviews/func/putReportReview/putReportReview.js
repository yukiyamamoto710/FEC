import axios from 'axios';

export default function putReportReview(obj, id) {
  axios.put('/reviews/report', {
    body: obj,
    params: {
      endpoint: `/reviews/${id}/report`,
    },
  })
    .then(console.log)
    .catch(console.log);
}
