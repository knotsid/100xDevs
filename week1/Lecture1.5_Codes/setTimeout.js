function findSum(n) {
     let ans = 0;
     for (let i = 0; i < n; i++) {
          ans += i;
     }
     return ans;
}

function findSumTill100() {
     console.log(findSum(100))
}
setTimeout(findSumTill100, 1000)
// syncSleep()
// findSumTill100()
console.log("hello world")

// compiler comes to line 12 and adds set timeout call to stack that will be executed after mentioned time or when the thread becomes free
// after adding line 12 to stack compiler prints line 15 while waiting for set timeout to complete the interval

function syncSleep() {
     let a=0;
     for (let i = 0; i < 1000000000; i++) {
          a++;
     }
}

//  alternative to settimeout is syncsleep by doing busywaiting
// intentionally keeping thread busy for compiler to not move ahead and keep thread busy