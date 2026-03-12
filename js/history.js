function addHistory(url,score){

let history=document.getElementById("history")

let li=document.createElement("li")

li.textContent=url+" - "+score+"%"

history.prepend(li)

}
