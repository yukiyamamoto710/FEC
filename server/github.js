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

      // body: {
      //   'sku_id': sku,
      //   'count' : quantity
      // }
  };

  //refactor this to return axios instead of using the callback
  return axios(option)
    .then((data) => {
      let datas = data.data
      //console.log(datas);
      callback(null, datas)
    })
    .catch((err) => {
      //console.log(err,'err')
      callback(err)
    })
}

const post = (input, quantity, sku, callback) => {
  let option = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${input}?sku_id=${sku}`,
    method: 'POST',
    headers:{
      'User-Agent': 'request',
      'Authorization': `${TOKEN}`,
    },
    data: {
      "sku_id": sku,
    }
};

  return axios(option)
    .then((data) => {
      let datas = data.data
      console.log(data);
      callback(null, datas)
    })
    .catch((err) => {
      console.log(err,'err')
      callback(err)
    })

}


module.exports = {
  hrapi: hrapi,
  post: post
}

//module.exports.hrapi(console.log);