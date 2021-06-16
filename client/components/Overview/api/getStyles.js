import axios from 'axios';


const getStyles = (id) => {
  return axios.get('/get', {params: {endpoint: `products/${id}/styles`}});
}


export default getStyles;


