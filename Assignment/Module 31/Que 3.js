let myArray = [1, 2, 3, 4, 5];

function addToArray(...numbers) {
    myArray = [...myArray, ...numbers];
}

addToArray(6, 7, 8);
addToArray(9, 10);

console.log(myArray); 
