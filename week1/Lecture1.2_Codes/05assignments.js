// CREATE COUNTER IN js COUNTS DOWN FROM 30-0
let num=30;
function counter() {
     if(num==0) return
     console.log(num)
     num--;
}

setInterval(counter, 10)

// CALCULATE THE TIME IT TAKES BTW SETTIMEOUT CALL AND INNER FUNCION ACTUALLY RUNNING
const startTime = performance.now();

function myFunc() {
     const endTime = performance.now();
     const elapsedTime = endTime - startTime;
     console.log("Inner function is running! Elapsed time:", elapsedTime, "ms");
}

setTimeout(myFunc, 1000)

console.log(`waiting for inner function to run`)

// CREATE A TERMINAL CLOCK (HH:MM:SS)
const clear = require('cli-clear')

function getTime() {
     const now = new Date()
     const hour = now.getHours().toString().padStart(2,"0") // padstart 
     const min = now.getMinutes().toString().padStart(2,"0")
     const sec = now.getSeconds().toString().padStart(2,"0")
     return `${hour}:${min}:${sec}`
}

function updateClock() {
     clear()
     const time = getTime()
     console.log(`Current Time =  ${time}`)
}

setInterval(updateClock, 1000)