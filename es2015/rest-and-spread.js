// Rest parameter

function getNumberOfParameters(...args){
    return args.length;
}

function addEvenNumbers(...args){
    let sum = 0;
    args.filter(number => number % 2 == 0).map(evenNumber => sum+=evenNumber);
    return sum;
}

addEvenNumbers(1,2,4,3,8);

// Spread operator

let dateArray = [1900,1,1];
let firstDate = new Date(...dateArray);

console.log(firstDate);

// Inserting a new array into another

let newArray = [3,4,5];
let originalArray = [1,2,...newArray,6,7];
console.log(originalArray);

// Spread operator in objects

let obj1 = {a: 'foo', b: 'bar'};
let obj2 = {a: 'faa', b: 'ber', c: 20};

const copied = {...obj1};
const merged = {...obj1,...obj2};

// Attempt to merge two objects with Spread operator

let merge  = (...objects) => ({...objects});
let mergedObjects = merge(obj1,obj2);
console.log(mergedObjects);

let mergedObjects2 = merge({},obj1,obj2);