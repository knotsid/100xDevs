function masterFunction(a, b, callback) {
     let val1 = callback(a)
     let val2 = callback(b)

     return val1 + val2
}

// directly using function definition without function name
// means function can't be called from outer scope

console.log(masterFunction(2, 3, function (n) {
     return n * n;
}))
console.log(masterFunction(2, 3, function (n) {
     return n * n * n;
}))