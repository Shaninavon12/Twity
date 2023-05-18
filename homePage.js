window.onload = function(){
    let userList = [];
    const shani = new User("shani", "123") ;
    userList.push(shani);
    const lior = new User ("lior" , "234");
    userList.push(lior);
}

function loginPage(){
    window.location = "loginProcess/loginPage.html";
}

function registerPage(){
    window.location = "registerProcess/registerPage.html";
}

class User {
    userName = "";
    password = ""; 
    constructor(userName , password){
        this.userName = userName;
        this.password = password;
    }
}