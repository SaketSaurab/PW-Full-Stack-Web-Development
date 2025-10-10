// Create an object representing a user and write a function to update any key dynamically.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let user = {
  user: "Alex",
  age: 23,
  city: "Delhi",
};

function updateUser(obj, key, value) {
  if (key in obj) {
    obj[key] = key === "age" ? Number(value) : value;
    console.log("updated user :", obj);
    rl.close();
  } else {
    console.log("Key does not exist. Available key: ", Object.keys(obj));
  }
  rl.close();
}
rl.question("Enter the key to update: ", (key) => {
  rl.question("Enter the value: ", (value) => {
    updateUser(user, key, value);
  });
});
