function findSum(num1, num2, fnToCall) {
     fnToCall(num1 + num2)
}

function displaySum(data) {
     console.log(`Result of sum is ${data}`)
}

function displaySumPassive(data) {
     console.log(`Sum's result is ${data}`)
}

findSum(1,2,displaySum)