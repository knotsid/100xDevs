function sum(n) {
     let sum = 0 // to store sum

     for (let i = 1; i <= n; i++) { // loop to iterate till n which is input
          sum += i
     }
     return sum // returning stuff
}

const ans = sum(10) // calling function
console.log(ans) // logging result