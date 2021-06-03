const TOKEN = require('./api.js');
const axios = require('axios');
let hrapi = (input, callback) => {
  let option = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${input}`,
      headers:{
        'User-Agent': 'request',
        'Authorization': `${TOKEN}`,
      },
  };

  axios(option)
    .then((data) => {
      console.log(data,'adssa');
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