// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")

function reader() {
     fs.readFile("week2/01-async-js/easy/data.txt", "utf-8", (err, data) => {
          console.log("promise done")
          console.log(data)
     })

}

reader()
console.log("test 1 faster than promise")
for (let i = 0; i < 10000000000;) {
     i++;
}
console.log("test 2 faster than promise")
