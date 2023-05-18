let userList = []; 

window.onload = function(){
    const shani = new User("shani", "123") ;
    userList.push(shani);
    const lior = new User ("lior" , "234");
    userList.push(lior);
}
class User {
    userName = "";
    password = ""; 
    constructor(userName , password){
        this.userName = userName;
        this.password = password;
    }
}


function register()
{
    var givenUser = document.getElementById("username").value;
    var givenPassword = document.getElementById("password").value;
    if (checkIfUserIs(givenUser)){
        var newUser = new User(givenUser, givenPassword);
        userList.push(newUser);
    }
    alert(" you sign up!");
    window.location = "twityUi.html";
}


function checkIfUserIs(givenUser){
    for (i in userList){
        if (userList[i].userName == givenUser){
            alert("this user is exsist*");
            return false;
        }
    }
    return true

}z