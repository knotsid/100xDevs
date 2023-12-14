const fs = require("fs");

fs.readFile("week1/Lecture1.5_Codes/temp.txt", "utf-8", function (err, data) {
     if (err) {
          console.error(err);
          return;
     }
     console.log(data) // last bcoz this is pending callback nd will execute then thread is idle
})

console.log("flash lol")

for (let i = 0; i < 1000000000;) {
     i++;
}

console.log("flash 2 bcoz thread is not idle")