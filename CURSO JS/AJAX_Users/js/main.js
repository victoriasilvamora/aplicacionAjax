const apiUrl = 'https://randomuser.me/api/'


async function llamadaApi(){
    let users = await fetch(apiUrl)
    users = await users.json()
    console.log(users.results) //
    showUser(users.results)
}

llamadaApi()

async function ChangeApi(){
    let users = await fetch(apiUrl)
    users = await users.json(data)
    console.log(users.results) //
    changethisUser(users.results)
}






let output = document.getElementById('output');
let element = this.output

let addNew = document.getElementById('loadNew')
addNew.addEventListener('click', llamadaApi,false)

let changeUser = document.getElementById('changeUser')
this.changeUser.addEventListener('click', ChangeApi,false)



function showUser(data) {
  
    data.forEach(user => { 
    
   output.innerHTML += `<h2>${user.name.first} ${user.name.last}</h2> <p>gender: ${user.gender}</p><br><img src="${user.picture.large}">`  
    
});
 

}
function changethisUser(data) {
    
    data.forEach(user => { 
      

     element.output.innerHTML = `<h2>${user.name.first} ${user.name.last}</h1> <p>gender: ${user.gender} <p><br><img src="${user.picture.large}">`  
    
});
 

}