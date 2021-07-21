import axios from 'axios';

export default function putHelpQA(target, id) {
  axios.put(`/qa/helpful`, {
    params: {
      endpoint: `/qa/${target}/${id}/helpful`,
    },
  })
    .then(console.log)
    .catch(console.log);
}
