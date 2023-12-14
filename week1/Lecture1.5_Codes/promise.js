const fs = require("fs");

function reader() {
     return new Promise(function (resolve) {
          fs.readFile("week1/Lecture1.5_Codes/temp.txt", "utf-8", function (err, data) {
               resolve(data) // last bcoz this is pending callback nd will execute then thread is idle
          })
     })
}

function onDone(data) {
     console.log(data)
}

reader().then(onDone)