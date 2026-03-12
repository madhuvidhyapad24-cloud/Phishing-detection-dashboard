function analyzeURL(url){

if(url.startsWith("https")){
httpsCheck.innerText="HTTPS Check: SAFE"
httpsCheck.className="safe"
}else{
httpsCheck.innerText="HTTPS Check: Not Secure"
httpsCheck.className="danger-text"
}

if(url.length<30){
lengthCheck.innerText="URL Length: Normal"
lengthCheck.className="safe"
}else{
lengthCheck.innerText="URL Length: Suspicious"
lengthCheck.className="warn"
}

}
