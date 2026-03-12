new Chart(chart,{
type:"doughnut",
data:{
labels:["Phishing","Malware","Safe"],
datasets:[{
data:[65,20,15],
backgroundColor:["red","orange","green"]
}]
}
})

new Chart(trendChart,{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
datasets:[{
data:[5,10,8,14,9,20,16],
borderColor:"red"
}]
}
})
