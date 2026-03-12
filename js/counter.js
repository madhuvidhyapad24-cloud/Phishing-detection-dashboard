let attacks=1402578

setInterval(()=>{

attacks+=Math.floor(Math.random()*5)

attackCount.innerText=attacks.toLocaleString()

},1500)
