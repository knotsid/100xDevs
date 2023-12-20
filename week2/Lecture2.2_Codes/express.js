const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

app.use(bodyParser.json)

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

// ########### POST REQUESTS ##################

app.post('/test-header', function(req,res){
     // adding auth header as 123 in postman
     console.log(req.headers)
     res.send({
          msg: 'testing post req'
     })
     //  RESPONSE ON CONSOLE
     // {
     //      authorization: '123',
     //      'content-type': 'application/json',
     //      'user-agent': 'PostmanRuntime/7.36.0',
     //      accept: '*/*',
     //      'postman-token': '4f69b082-4f88-4c3d-9672-94321ba0b8aa',
     //      host: 'localhost:3000',
     //      'accept-encoding': 'gzip, deflate, br',
     //      connection: 'keep-alive',
     //      'content-length': '36'
     // }
     console.log(req.headers["authorization"])    // to get only authorization token
     console.log(req.body)    // client side input 
})

app.listen(PORT, function(){
     console.log(`server listening on port : ${PORT}`)
})