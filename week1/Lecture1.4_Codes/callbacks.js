function square(n) {
     return n * n;
}

function cube(n) {
     return n * n * n;
}


function sumOfSquare(a,b) {
     const val1 = square(a)
     const val2 = square(b)

     return val1+val2
}

// similar structure nd function like above function
function sumOfCube(a,b) {
     const val1 = cube(a)
     const val2 = cube(b)

     return val1+val2
}

console.log(sumOfSquare(2,3))
console.log(sumOfCube(2,3))

// Implimenting DRY

function masterFunction(a,b,callback) {
     let val1 = callback(a)
     let val2 = callback(b)

     return val1+val2
}

console.log(masterFunction(2,3,square))
console.log(masterFunction(2,3,cube))