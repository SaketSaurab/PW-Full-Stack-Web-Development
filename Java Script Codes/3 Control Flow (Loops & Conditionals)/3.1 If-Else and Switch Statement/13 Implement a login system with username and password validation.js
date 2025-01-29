// Implement a login system with username and password validation.

const readline=require('readline');

const users=[
    {UserName:'admin1',Password:'ad12345'},
    {UserName:'admin2',Password:'ad23456'},
    {UserName:'admin3',Password:'ad34567'},
    {UserName:'admin4',Password:'ad45678'}
];

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function verification(user1,password1){
const user=users.find(user=>user.UserName.toLowerCase()===user1.toLowerCase());
if(!user){
    console.log("Invalid user name \n");
    return false;
}
if(user.Password!==password1){
    console.log("Invalid password \nṇ");
    return false;
}
console.log("Login Successfull");
return true;
}


rl.question("Enter user name",(user)=>{
    rl.question("Enter password",(password)=>{
        verification(user.trim(),password.trim());
        rl.close();
    });
});
