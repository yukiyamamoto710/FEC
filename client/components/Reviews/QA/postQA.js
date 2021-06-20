import axios from 'axios';

export default function postQA(target, endPoint) {
  axios.post(`/qa/questions`, {
    body: target,
    params: {
      endpoint: `qa/questions${endPoint}`,
    },
  })
    .then(console.log)
    .catch(console.log);
}
