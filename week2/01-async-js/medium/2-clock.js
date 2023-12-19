// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function ampm(hour) {

     return hour>12 ? "PM" : "AM"
     // if(hour>12){
     //      return "PM"
     // }
     // else return "AM"
}

function machineTime() {
     const now = new Date()
     const hour = now.getHours().toString().padStart(2,0)
     const min = now.getMinutes().toString().padStart(2,0)
     const sec = now.getSeconds().toString().padStart(2,0)
     console.clear()

     const shift = ampm(hour)
     console.log(`${hour}:${min}:${sec} ${shift}`)
}

setInterval(machineTime,1000)