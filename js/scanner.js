function detectPhishing(url){

let score=0

if(!url.startsWith("https")) score+=20
if(url.length>30) score+=15
if(url.includes("login")||url.includes("verify")||url.includes("bank")) score+=30
if(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/.test(url)) score+=25
if((url.match(/\./g)||[]).length>3) score+=10

return score

}

function scan(){

let url=document.getElementById("urlInput").value

let score=detectPhishing(url)

if(score>100) score=100

document.getElementById("score").innerText=score+"%"

updateGauge(score)

addHistory(url,score)

analyzeURL(url)

}
