const express = require('express');
const app = express(); 
const path = require('path');
const port = 8080; 

app.use(express.static(path.join(__dirname, 'client', 'dist')));  

app.use((req, res) => {
  res.end(404);
});

app.listen(port, ()=> {
  console.log(`I am listening on ${port}`); 
});
