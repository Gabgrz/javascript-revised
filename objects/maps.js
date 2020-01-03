// When to use Map over an object
/*
* The keys can be of any type, including functions, objects and any primitive
* You can get the size of a Map
* You can iterate over a Map
* Performance is better when there's a frequent addition of key/value pairs.
* */

let mapOne = new Map([['key','value'],['key2','-value']]);
let mapTwo = new Map([[1000,'one-thousand'],[2000,'two-thousand']]);

console.log(mapOne);
console.log(mapTwo);

// Methods

/*
set(key,value) // If key already exists, it gets replaced by a new call.
get(key) // Gets the value of a given key. If key does not exist, it returns undefined.
has(key) // Returns whether the key exists.
delete(Key) // Deletes the key/value pair of the given key and returns true if item was found.
clear() // Removes all items of the Map.
keys() // Returns an iterator of keys in the map for each element
values() // Returns an iterator of values in the map for each element
entries() // Returns an iterator of array[key,value] in the map for each element

 */