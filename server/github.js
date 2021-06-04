const TOKEN = require('./config.js');
const axios = require('axios');
let hrapi = (input, callback) => {
  console.log('input testing ' + input);
  let option = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${input}`,
      headers:{
        'User-Agent': 'request',
        'Authorization': `${TOKEN}`,
      },
  };

  //refactor this to return axios instead of using the callback
  return axios(option)
    .then((data) => {
      let datas = data.data
      callback(null, datas)
    })
    .catch((err) => {
      console.log(err,'err')
      callback(err)
    })
}


module.exports = {
  hrapi: hrapi,
}

//module.exports.hrapi(console.log);