// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counterv2() {
     let count =0;
     function updater() {
          count ++;
          console.clear()
          console.log(count)
          setTimeout(updater,1000)
     }
     updater()
}

counterv2()