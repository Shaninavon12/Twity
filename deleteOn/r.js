/*var file = require ('./usersFile.json');
var obj =JSON.parse(file);
const userList = [];
for(var i in obj){
    userList.push(obj[i])
}
console.log(userList);*/

$('document').ready(function() {
    $('li#user').click(function() {
         $(this).addClass('selectedEmp');
    });
});

console.log("HII");
$.getJSON('userFile.json', function (json) {
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                username: item.username,
                password: item.password
            });            
        }
    }
    });

/*console.log(file.type);
let i =0;
for (;i <file.length; i++){
    console.log(file[i])
}

var data = JSON.parse(fs.readFileSync('./usersFile.json'));
console.log(data);


for (const [key,value] of Object.entries(file)){
    userList.push(['${key}' , '${value}']);
}
console.log(userList);*/