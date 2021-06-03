const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github.js')

//app.use(express.json());
app.use(express.static('./public'));

app.listen(PORT, ()=>{
  console.log('connect')
});

app.get('/getproducts', (req, res)=>{
  api.hrapi('products',(err, data)=>{
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})