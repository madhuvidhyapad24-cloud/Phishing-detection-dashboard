function updateGauge(score){

let circle=document.getElementById("progress")

let offset=440-(440*score/100)

circle.style.strokeDashoffset=offset

}
