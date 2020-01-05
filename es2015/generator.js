// An example of a Generator function

function* generateChaos(){
    cities = ['Vizima', 'Cintra','Novigrad'];
    for(city of cities){
        yield city;
    }
}

let chaos = generateChaos();
console.log(`Generate chaos in ${chaos.next().value}!`);

// An infinite iterator

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...