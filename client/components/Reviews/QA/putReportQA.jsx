import axios from 'axios';

export default function putReportQA(target, id) {
  axios.put(`/qa/report`, {
    params: {
      endpoint: `/qa/${target}/${id}/report`,
    },
  })
    .then(console.log)
    .catch(console.log);
}