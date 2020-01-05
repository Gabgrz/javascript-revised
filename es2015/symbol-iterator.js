// Example of a gen function and Symbol.iterator

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function*() {
        for(let index of arr) {
            yield `${index}`;
        }
    }
};
const all = [...my_obj]
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 5)
    .reduce((i, d) => i + d);
console.log(all);

// Another example

let witcherSchools = {
    [Symbol.iterator]: function* gen() {
        yield "Bear"; yield "Cat"; yield "Wolf";
    }
};

function getWitcherSchools(){
    for(school of witcherSchools)
        console.log(school);
}

getWitcherSchools();
