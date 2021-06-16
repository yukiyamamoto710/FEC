import axios from 'axios';

export default function putReportReview(obj, id) {
  axios.put('/reviews/report', {
    body: obj,
    params: {
      endpoint: `/reviews/${id}/report`,
    },
  })
    .then((res) => {
      const arr = res.data;
      console.log(arr);
    })
    .catch((err) => console.log);
};