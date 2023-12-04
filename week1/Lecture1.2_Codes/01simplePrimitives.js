// console.log("bonjour")

function greet(firstName, lastName) {
     console.log(`Hello ${firstName} ${lastName}`)
}

// greet("Sam", "Sulek")

const persons = [
     { firstName: "sam", lastName: "sulek", gender: "M" },
     { firstName: "wanda", lastName: "vision", gender: "F" },
     { firstName: "tate", lastName: "cobra", gender: "M" },
]

function preference(persons) {
     for (i = 0; i < persons.length; i++) {
          if (persons[i].gender == "M") {
               console.log(`Hello ${persons[i].firstName} ${persons[i].lastName}`)
          }
     }
}

preference(persons)

function print1k() {
     for (i = 0; i <= 1000; i++) {
          console.log(i)
     }
}

print1k()