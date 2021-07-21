const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000 || process.env.PORT;
const api = require('./github');

app.use(express.json());
app.use(express.static('./public'));
var saveProducts = {};

app.listen(PORT, () => {
  console.log('connect');
});

app.use('/get', (req, res) => {
  api.hrapi(`${req.query.endpoint}`, (err, data) => {
    if (err) {
      // console.log(err)
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

app.put('/reviews/report', (req, res) => {
  api.hrapiput(req.body.params.endpoint, req.body.body, (err,data) => {
    if (err) {
      console.log(err)
      res.status(404).send(err);
    } else {
      console.log(data);

      res.status(200).send(data);
    }
  });
});

app.put('/reviews/helpful', (req, res) => {
  api.hrapiput(req.body.params.endpoint, req.body.body, (err,data) => {
    if (err) {
      console.log(err)
      res.status(404).send(err);
    } else {
      console.log(data);

      res.status(200).send(data);
    }
  });
});

app.put('/qa/helpful', (req, res) => {
  // console.log(req.body)
  api.hrapiput(req.body.params.endpoint, req.body, (err,data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.put('/qa/report', (req, res) => {
  // console.log(req.body)
  api.hrapiput(req.body.params.endpoint, req.body, (err,data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('NO CONTENT');
    }
  });
});

app.post('/qa/questions', (req, res) => {
  // console.log(req.body)
  api.hrapipost(req.body.params.endpoint, req.body.body, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('CREATED');
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

// getting all products information
app.use('/getAll/:id', (req, res) => {
  const id = req.params.id;
  var data = {};
  if (saveProducts[id]) {
    data = saveProducts[id];
    res.status(200).send(data);
  } else {
    api.hrapi(`products/${id}`, (err, data1) => {
      if (err) {
        res.status(404).send(err);
      } else {
        api.hrapi(`products/${id}/styles`, (err, data2) => {
          if (err) {
            res.status(404).send(err);
          } else {
            api.hrapi(`reviews/meta/?product_id=${id}`, (err, data3) => {
              if (err) {
                res.status(404).send(err);
              } else {
                var mergedData = {...data1, ...data2, ...data3};
                saveProducts[id] = mergedData;
                res.status(200).send(mergedData);
              }
            })
          }
        })
      }
    })
  }
})

app.use('/getAllItems',(req, res)=>{
  // console.log(req.params.page,'dass')
  api.hrapi(`products/?count=1000`,(err, data)=>{
    if(err){
      console.log(err)
      res.status(404).send(err);
    } else {
      console.log(data)
      res.status(200).send(data);
    }

  })
})