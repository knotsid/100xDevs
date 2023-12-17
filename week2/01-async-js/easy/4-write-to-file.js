// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

// Asynchronous version
function writer() {
     fs.writeFile("./data.txt", "js is fun", (err) => {
          if (err) console.log(err)
          else console.log("success : written")
     })
}

writer()

// Synchronous version
function SyncWriter() {
     const text = "js is more fun"
     fs.writeFileSync("./data.txt", text)
}
SyncWriter()