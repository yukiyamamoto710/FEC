import axios from 'axios';


const fetchGet = (string, id, name) => {
  return axios.get('/get', {params: {endpoint: `${string}/${id}`}});
}


export default fetchGet;