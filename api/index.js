// import * as curlconverter from 'curlconverter';
// import express from 'express';
// import bodyParser from "body-parser";

// const port = 3000;
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))

// app.post('/python', (req, res) => {
//     const { curlUrl } = req.body

//     const result = curlconverter.toPython(curlUrl);

//     res.end(JSON.stringify(result));
// })

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

const app = require('express')();
const { v4 } = require('uuid');

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;