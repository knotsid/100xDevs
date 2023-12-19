// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs")

function repairFunction() {
     // reading data from file
     const data = fs.readFileSync("./data.txt", 'utf-8')

     // removing spaces
     const cleanedData = data.replace(/\s+/g, ' ')

     // writing to file
     fs.writeFileSync('./data.txt', cleanedData)

     console.log("cleaned data updates")
}

repairFunction()