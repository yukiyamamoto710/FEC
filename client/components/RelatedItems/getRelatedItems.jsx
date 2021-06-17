import React from 'react';
import axios from 'axios';

const getRelatedItems = (id) => {
  return axios.get('/get', {params: {endpoint: `products/${id}/related`}})
    .then((response) => {
      var promises = [];
      for (var i = 0; i < response.data.length; i++) {
        promises.push(axios.get(`getAll/${response.data[i]}`).then((res)=>res.data));
      }
      return Promise.all(promises)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getRelatedItems;