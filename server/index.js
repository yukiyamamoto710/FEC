const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github.js')

app.use(express.json());
app.use(express.static('./public'));

app.listen(PORT, ()=>{
  console.log('connect')
});

app.get('/getproducts', (req, res)=>{
  api.hrapi('products',(err, data)=>{
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
});

app.use('/getreviews', (req, res)=>{
  var a = req.originalUrl.lastIndexOf('/');
  let id = req.originalUrl.slice(a+1);
  api.hrapi(`reviews/?product_id=${id}`,(err, data)=>{
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})