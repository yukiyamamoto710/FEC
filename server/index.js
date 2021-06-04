const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github.js')

app.use(express.json());
app.use(express.static('./public'));

app.listen(PORT, ()=>{
  console.log('connect')
});

app.get('/get', (req, res)=>{
  api.hrapi(`${req.query.endpoint}`, (err, data)=>{
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
});




