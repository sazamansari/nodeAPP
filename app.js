require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const data = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});