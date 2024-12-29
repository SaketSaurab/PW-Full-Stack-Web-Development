
let myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

let keyExists = myMap.has('key2'); 
console.log(`Does 'key2' exist? ${keyExists ? 'Yes' : 'No'}`);


let value = myMap.get('key2'); 
console.log(`The value associated with 'key2' is: ${value}`);

for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
