// Inefficient loop
for (let i = 0; i < 1000000; i++) {
  console.log(i);
}

// Memory leak example
const arr = [];
function leakMemory() {
  while(true) {
    arr.push(new Array(1000).fill('*'));
  }
}
// Don't run it for real!
