const userList =[];


class User {
    userName = "";
    password = ""; 
    constructor(userName , password){
        this.userName = userName;
        this.password = password;
    }
}

function readJsonToString(){
    $.getJson("usersFile.json" , function (data){
        console.log(data);
    });
}
function convertJson(){ 
    for (const [key,value] of Object.entries(jsonString)){
        userList.push(['${key}' , '${value}']);
    }

}


const { error } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");


fs.readFile("userFile.json", (error, data) =>{
    if (error){
        console.error(error);
        throw err
    }
    const users = JSON.parse(data);
})
