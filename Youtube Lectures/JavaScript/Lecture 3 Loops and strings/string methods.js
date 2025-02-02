// string methods
let str="  Apna College    ";

let str2="pw skills";
console.log("original string:",str);

// str.toUpperCase
console.log("toUpperCase:",str.toUpperCase());

console.log("toLowerCase:",str.toLocaleLowerCase());

console.log("trim:",str.trim());


console.log("str.slice(strt,end):",str.slice(3,9));
console.log("str concat str2:",str.concat(str2));
console.log("str.replace(searchValue,newValue):",str.replace('a','z'));
console.log("str.charAt[index]",str.charAt(3));


// practice question
let user=prompt("enter your name to generate your user name");
console.log("@"+user+user.length);