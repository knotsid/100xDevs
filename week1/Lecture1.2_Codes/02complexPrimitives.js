const arr = [1, 2, 3, 4, 5, 6, 7, 8, 29, 0, 2, 11, 13, 15, 14, 12, 19]

const persons = [
     { firstName: "sam", lastName: "sulek", gender: "M" },
     { firstName: "wanda", lastName: "vision", gender: "F" },
     { firstName: "cobra", lastName: "tate", gender: "M" },
     { firstName: "lol", lastName: "xd", gender: "F" },
]

function printEven(array) {
     for (let i = 0; i < array.length; i++) {
          if (array[i] % 2 === 0) {
               console.log(array[i])
          }
     }
}

// printEven(arr)

function printLargest(arr) {
     let max = arr[0];
     for (let i = 0; i < arr.length; i++) {
          if (arr[i] > max) {
               max = arr[i];
          }
     }
     return max;
}

// console.log(printLargest(arr))

function printMale(persons) {
     for (const person of persons) {
          if (person.gender === "M") {
               console.log(person.firstName)
          }
     }
}

// printMale(persons)

function reverseArr(arr) {
     for (let i = 0; i < arr.length / 2; i++) {
          // swap(arr[i],arr[arr.length-i-1])
          [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
     }
     printArr(arr)
}

function printArr(arr) {
     for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
     }
}

reverseArr(arr)