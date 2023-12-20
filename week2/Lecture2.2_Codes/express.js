const express = require('express')
const PORT = 3000;
const app = express();

app.get('/', function(req,res){
     res.send("moye moye")
})

app.get('/test-json', function(req,res){
     res.json({
          name: "notsid",
          age: 22
     })
})

app.get('/test-html', function(req,res){
     res.send("<h1>JS is fun</h1>")
})

app.get('/js', function(req,res){
     res.send("js is fun")
})

app.listen(PORT, function(){
     console.log(`server listening on port : ${PORT}`)
})