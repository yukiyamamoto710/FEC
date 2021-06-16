const axios = require('axios');
const TOKEN = require('./config');

const hrapi = (input, callback) => {
  const option = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${input}`,
    headers: {
      'User-Agent': 'request',
      Authorization: `${TOKEN}`,
    },
  };

  return axios(option)
    .then((data) => {
      const datas = data.data;
      callback(null, datas);
    })
    .catch((err) => {
      callback(err);
    });
};

const hrapipost = (input, body, callback) => {
  const option = {
    headers: {
      Authorization: `${TOKEN}`,
    },
  };

  return axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/${input}`, body, option)
    .then((data) => {
      const datas = data.data;
      callback(null, datas);
    })
    .catch((err) => {
      callback(err);
    });
};

const hrapiput = (input, body, callback) => {
  const option = {
    headers: {
      Authorization: `${TOKEN}`,
    },
  };
  return axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo${input}`, body, option)
    .then((data) => {
      const datas = data.data;
      callback(null, datas);
    })
    .catch((err) => {
      callback(err);
    });
};

module.exports = {
  hrapi,
  hrapipost,
  hrapiput,
};

// module.exports.hrapi(console.log);
