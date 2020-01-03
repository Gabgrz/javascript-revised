// Example 1

let array = ["MySQL","PosgreSQL","Spanner"];
let [m, p, s] = array;
console.log(s);

// Example 2

let a, b, c = 5, d = 10;
[a, b = 15] = [20];
console.log(a,b);

// Example 3

[a, d] = [d, a];
console.log(a,d);