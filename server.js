const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello, there!');
});

app.listen(4000, () => {
  console.log(`Server listening at http://localhost:4000`);
})