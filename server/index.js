const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github');

app.use(express.json());
// app.use("/:id", express.static('./public'))
app.use("/", express.static('./public'));

app.listen(PORT, () => {
  console.log('connect');
});

app.use('/get', (req, res) => {
  api.hrapi(`${req.query.endpoint}`, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.status(200).send(data);
    }
  });
});

app.get('/post/review', (req, res) => {
  api.hrapi(`${req.query.endpoint}`, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.status(200).send(data);
    }
  });
});

app.post('/cart', (req, res) => {
  var url = req.route.path.slice(1)
  console.log(req.body);
  api.post(`${url}`, req.body.quantity, JSON.parse(req.body.sku),  (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log(data);
      res.status(201).send(data);
    }
  });
});

// app.get('/:product_id', (req, res) => {
//   api.hrapi(`products/${req.params.product_id}`, (err, data) => {
//     if (err) {
//       res.status(404).send(err);
//     } else {
//       //console.log(data);
//       res.status(200).send(data);
//     }
//   });
// });