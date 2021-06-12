const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github.js')

app.use(express.json());
app.use(express.static('./public'));

app.listen(PORT, ()=>{
  console.log('connect')
});

app.get('/get', (req, res) => {
  api.hrapi(`${req.query.endpoint}`, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      //console.log(data);
      res.status(200).send(data);
    }
  });
});

app.use('/relatedItems/:product_id', (req, res) => {
  api.hrapi(`products/${req.params.product_id}`, (err, data) => {
    if (err) console.log(err);
    delete data['campus'];
    delete data['created_at'];
    delete data['description'];
    delete data['slogan'];
    delete data['updated_at'];
    delete data['product_id'];

    api.hrapi(`products/${req.params.product_id}/styles`, (err, data_style) => {
      if (err) console.log(err);
      data_style.results.map(style=> {
        delete style['skus'];
        delete style['name'];
      })

      api.hrapi(`reviews/meta/?product_id=${req.params.product_id}`, (err, data_review) => {
        if (err) {
          res.status(404).send(err);
        } else {
          review = {ratings: data_review['ratings']}
          var filteredData = {...data, ...data_style, ...review}
          res.status(200).send(filteredData);
        }
      })
    })
  })
})