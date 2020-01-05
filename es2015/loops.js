// For-of
// Iterates over elements of an iterable Object

let sqlDb = ["MySQL","PosgreSQL","Spanner"];

for(let db of sqlDb){
    console.log("RDBMS name: "+db);
}


// For-in
// Iterates over the enumerable keys of an object

let alphabet = {a:1, b:2, c:3}
var count = 0;

for(let letter in alphabet){
    count++;
    console.log(`Letter at position ${count}: ${letter}`);
    
}