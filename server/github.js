const TOKEN = require('./api.js');
const axios = require('axios');
let hrapi = (callback) => {
  let option = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers:{
        'User-Agent': 'request',
        'Authorization': `${TOKEN}`,
      },
  };
  const url =
  axios(option)
    .then(data=>{
      callback(null, data)
    })
    .catch(err=>{
      callback(err)
    })
}
module.exports = {
  hrapi: hrapi,
}