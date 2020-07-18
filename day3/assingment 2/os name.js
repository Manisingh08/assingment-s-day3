let numstr = prompt('Enter your OS name and version with gap:- ')
let st= numstr.split(" ")
console.log(`The OS name  is ${st[0]} & its version is ${parseInt(st[1])}`);