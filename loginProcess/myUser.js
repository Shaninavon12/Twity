//import tryme from '/Users/HadasimWNET4/Desktop/twits_twits/twity/usersFile.json';
import json from '../usersFile.json' assert {type: 'json'};

console.log(json)


const jsonList = '{"users" : [{"username" : "123","password" : "123"}, {"username" : "611shani","password" : "123"}]}';
const userList = JSON.parse(jsonList);
console.log(userList); 
console.log(userList.users[0]);
//let json = require('/Users/HadasimWNET4/Desktop/twits_twits/usersFile.json');
//console.log(json, 'the json obj');


window.onload = function(){
    const shani = new User("shani", "123") ;
    userList.users.push(shani);
    const lior = new User ("lior" , "234");
    userList.users.push(lior);
}
class User {
    userName = "";
    password = ""; 
    constructor(userName , password){
        this.userName = userName;
        this.password = password;
    }
}

function LoginUser(){
    const givenUser = document.getElementById("username").value;
    const givenPassword = document.getElementById("password").value;
    for (i in userList){
        if ((userList.users[i].userName == givenUser)&&(userList.users[i].password == givenPassword)){
            alert("Login successfully!");
            window.location = "twityUi.html";   
            break;
        }
        else
        {
            alert("try again!");
        }
    }
}



// עדכון לגייסון 