const apiUrl = 'https://trackapi.nutritionix.com/v2/natural/nutrients'



const nutritionHeader = {
    'x-app-id':'8747828c',
    'x-app-key': '14ee7b7cefbee3336def22c372da4780',
    'Content-Type': 'application/json',
    "id": "2c1ea73d-7531-4e1c-a8f6-0035aa18a687"
}

const options = {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(), // data can be `string` or {object}!
    headers: nutritionHeader
}

async function llamadaApi(){
    let users = await fetch(apiUrl)
    users = await users.json()
    console.log(users.results) //
    showUser(users.results)
}

llamadaApi()

async function ChangeApi(){
    let users = await fetch(apiUrl)
    users = await users.json()
    console.log(users.results) //
    changethisUser(users.results)
}






let output = document.getElementById('output');
let element = this.output

let addNew = document.getElementById('loadNew')
addNew.addEventListener('click', llamadaApi,false)





function showUser(data) {
  
    data.forEach(user => { 
    
   output.innerHTML += `<h2>${user.name.first} ${user.name.last}</h2> <p>gender: ${user.gender}</p><br><img src="${user.picture.large}">`  
    
});
 
}
