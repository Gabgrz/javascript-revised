let obj = {
  name : "Gabriel",
  xp: 80
};

let{n,x} = obj;
console.log(n,x);

//

let{n2,x2} = {
    name : "Gabriel",
    xp: 80
};
console.log(n2,x2);

//

let n3, x3;
({n3, x3} = {name : "Gabriel",xp: 80});
console.log(n3,' ',x3);

// Assign object to new variable names

let coder = {name : "Gabriel",xp: 80};
let {name: foo, xp:bar} = coder;
console.log(foo);
console.log(bar);

// Assign default value to variables

let programmer = {name : "Gabriel",xp: 80};
let {name = "John", age = 25} = programmer;
console.log(age);