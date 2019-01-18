/*
const apiUrl = 'https://swapi.co/api/planets'


async function llamadaApi(){
    let planets = await fetch(apiUrl)
    planets = await planets.json()
    console.log(planets.results) // 0 a 9 name y population
    representar(planets.results)
}

llamadaApi()

const pintame = document.getElementById('pintame')

function representar(planetList){
    planetList.forEach(planet => { // function(planet) se puede sustituir por planet =>
        pintame.innerHTML += `<b>${planet.name}</b> population: ${planet.population} <br>`
    });
}

let output = document.getElementById('output');
let buttonClick = document.getElementById('loadNew')

buttonClick.addEventListener('click', MostrarUser)


function MostrarUser(){

        let data = user.results[0];
        let message = '<h2>'+data.name.first + '  ' + data.name.last + '</h2><img src="'+data.picture.large +'">'
               
        output.innerHTML = message;
    };


{
    error: "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
  }





*/

const apiUrl = 'https://randomuser.me/api/'


async function llamadaApi(){
    let users = await fetch(apiUrl)
    users = await users.json()
    console.log(users.results) //
    showUser(users.results)
}

llamadaApi()



let output = document.getElementById('output');

let addNew = document.getElementById('loadNew')
addNew.addEventListener('click', showUser,false)

let changeUser = document.getElementById('changeUser')
changeUser.addEventListener('click', changeUser,false)



function showUser(data) {
  
    data.forEach(user => { 
    
   output.innerHTML += `<h2>${user.name.first} ${user.name.last}</h2> <p>gender: ${user.gender}</p><br><img src="${user.picture.large}">`  
    
});
 

}
function changeUser(data) {
  
    data.forEach(user => { 
    
   output.innerHTML = `<h2>${user.name.first} ${user.name.last}</h1> <p>gender: ${user.gender} <p><br><img src="${user.picture.large}">`  
    
});
 

}

    

