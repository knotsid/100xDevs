const express = require('express')
const PORT = 3000;
const app = express();

app.get('/', function(req,res){
     res.send("moye moye")
})

app.get('/js', function(req,res){
     res.send("js is fun")
})

app.listen(PORT, function(){
     console.log(`server listening on port : ${PORT}`)
})