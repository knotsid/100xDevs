const express = require('express')
const cors = require('cors'); // was getting cors error on chrome dev tools so just installed it :) 
const app = express()

app.use(cors());    // middleware handle CORS issues on every request

app.get('/', (req, res) => {
     // Extracting query parameters 'p', 'r', and 't' from the request object
     // the url we fetched from html file has these parameters 
     const p = req.query.p;
     const r = req.query.r;
     const t = req.query.t;

     res.send(((p * r * t) / 100).toString())
})

app.listen(3000, () => {
     console.log('Server is running on port 3000');
});