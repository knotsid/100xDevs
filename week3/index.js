const express = require("express")

const app = express()

// app.get("/health-checkup", function (req, res) {
//      const username = req.header.username
//      const password = req.header.password
//      const kidneyId = req.header.kidneyId

//      if ((username != "sid" && password != "pass")) {
//           res.status(400).json({ msg: "wrong credentials" })
//      }

//      if (kidneyId != 1 || kidneyId != 2) {
//           res.json({
//                msg: "kidney is not fine"
//           })
//      }
//      res.json({
//           msg: "kidney is fine"
//      })
// })

app.use(express.json())

app.post("/health-checkup", function (req, res) {
     //  kidneys = [1,2]
     const kidneys = req.body.kidneys;
     const kidneyLen = kidneys.kidneyLen;

     res.send("you have " + kidneyLen + " kidneys");
});

// app.use(function (err, req, res, next) {
//      res.json({
//           msg: "server boom"
//      })
// })

app.listen(3000)
