function sum(n) {
     let sum = 0 // to store sum

     for (let i = 1; i <= n; i++) { // loop to iterate till n which is input
          sum += i
     }
     return sum // returning stuff
}

const ans = sum(10) // calling function
console.log(ans) // logging result

console.log(sum(100))
console.log(sum(10000))
console.log(sum(1000000))
console.log(sum(100000000))