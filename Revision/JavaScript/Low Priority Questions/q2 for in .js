// for in loop

let student = {
  name: "Hitesh",
  class: 12,
  School: "DPS",

  rollNumber: 1234567,
  address: {
    city: "Delhi",
    area: "ISBT",
    pincode: 123456,
  },
};
for (let key in student) {
  console.log(key, student[key]);
}
