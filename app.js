const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();
const http = require('http').createServer(app);

// app.use(express.static('public'))
app.use(express.static('public'))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname,'public','html','index.html'));
});

http.listen(port, () => {
  console.log('Listening to port 3000');
})