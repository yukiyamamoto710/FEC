const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github');

app.use(express.json());
app.use(express.static('./public'));
// app.use('/:id', express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log('connect');
});

app.use('/get', (req, res) => {
  api.hrapi(`${req.query.endpoint}`, (err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/post/review', (req, res) => {
  api.hrapipost('reviews', req.body.body, (err, data) => {
    if (err) {
      res.status(404).send('hi');
    } else {
      res.status(201).send('CREATED');
    }
  });
});

app.put('/reviews/helpful', (req, res) => {
  api.hrapiput(req.body.params.endpoint, req.body.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.put('/reviews/report', (req, res) => {
  api.hrapiput(req.body.params.endpoint, req.body.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send('NO CONTENT');
    }
  });
});

app.put('/qa/helpful', (req, res) => {
  console.log(req.body)
  api.hrapiput(req.body.params.endpoint, req.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.put('/qa/report', (req, res) => {
  console.log(req.body)
  api.hrapiput(req.body.params.endpoint, req.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.post('/qa/questions', (req, res) => {
  console.log(req.body)
  api.hrapipost(req.body.params.endpoint, req.body.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.post('/cart', (req, res) => {
  const url = req.route.path.slice(1);
  // console.log(req.body);
  api.post(`${url}`, req.body.quantity, JSON.parse(req.body.sku), (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      // console.log(data);
      res.status(201).send(data);
    }
  });
});
