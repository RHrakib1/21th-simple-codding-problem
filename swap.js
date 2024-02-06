// swap er madhome amra kono variable er man k onno arek variable er man a add krte pari r akta teporary variable niye
let a = 10;
let b = 12;
console.log(a, b);
const temporary = a;
a = b;
b = temporary;
console.log(a, b);


// destructing korar madhome swap kora jai....man paltanor onno arekta niyom
console.log("destructing");
let x=2;
let y=1;
console.log(x, y);
[x, y]=[y, x];
console.log(x, y);