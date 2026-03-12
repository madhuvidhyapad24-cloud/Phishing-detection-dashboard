var map=L.map('map').setView([20,78],3)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

function randomAttack(){

let lat=(Math.random()*140)-70
let lon=(Math.random()*360)-180

L.circleMarker([lat,{
radius:6,
color:'red'
}).addTo(map)

}

setInterval(randomAttack,2000)
